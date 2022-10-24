"use strict"

//Burger menu

const burger = document.querySelector('.nav__button');

if (burger) {

    document.addEventListener('DOMContentLoaded', nav)
    function nav(){
        const nav = document.querySelector('.nav');
        burger.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }

}

    //Back to top

    const backtotopbutton = document.querySelector(".fleche-container__fleche");

    if (backtotopbutton) {

        console.log(backtotopbutton)

        const scrollContainer = () => {
            return document.documentElement || document.querySelector("body");
        };
    
        function goToTop() {
            document.body.scrollIntoView({
            behavior: "smooth",
        });
        };

    backtotopbutton.addEventListener("click", goToTop);

    }

const btPost = document.querySelector("#post");
const btClear = document.querySelector("#clear");
const btReset = document.querySelector("#reset");
const formPubli = document.querySelector(".form-box");
const btPubli = document.querySelector(".form__button");
const btclose = document.querySelector(".form__close");
const canvasBox = document.querySelector(".drawapp-box__canvas");


if (canvasBox) {

    // PLUGIN CANVAS SET UP + OPTIONS

    $(".drawapp-box__canvas").drawr({
        "enable_tranparency" : false,
        "canvas_width" : 1080,
        "canvas_height" : 1528
    });

    //Enable drawing mode, show controls
    $(".drawapp-box__canvas").drawr("start");

    //add custom save button.
    var buttoncollection = $(".drawapp-box__canvas").drawr("button", {
        "icon":"mdi mdi-folder-open mdi-24px"
    }).on("touchstart mousedown",function(){
        // alert("demo of a custom button with your own functionality!");
        $("#file-picker").click();
    });
    var buttoncollection = $(".drawapp-box__canvas").drawr("button", {
        "icon":"mdi mdi-content-save mdi-24px"
    }).on("touchstart mousedown",function(){
        var imagedata = $(".drawapp-box__canvas").drawr("export","image/png");
        var element = document.createElement('a');
        element.setAttribute('href', imagedata);// 'data:text/plain;charset=utf-8,' + encodeURIComponent("sillytext"));
        element.setAttribute('download', "test.png");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });
    $("#file-picker")[0].onchange = function(){
        var file = $("#file-picker")[0].files[0];
        if (!file.type.startsWith('image/')){ return }
        var reader = new FileReader();
        reader.onload = function(e) { 
            $(".drawapp-box__canvas").drawr("load",e.target.result);
        };
        reader.readAsDataURL(file);
    };

    function destroy(){
        $(".drawapp-box__canvas").drawr("destroy");
    }

    function clear(){
        $(".drawapp-box__canvas").drawr("clear");
    }

    const path = '/B3G1_iLab_Goblins Story/dist/assets/images/bd/'
    const src = 'assets/images/bd/'

    var now = new Date();
    
    var time =  `${now.getFullYear()}`+`${now.getMonth()}`+`${now.getDate()}`+`${now.getHours()}`+`${now.getMinutes()}`+`${now.getSeconds()}`;


    // FONCTION DE SAUVEGARDE DU CANVAS

    function save_canvas(c) {
        var b64Image = c.toDataURL("image/png");

        $.ajax({
            url: 'scripts/save_image_b64.php',
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: {body : `${b64Image}`, structure : path, name: time},

            success: function (data) {
                console.log(data)
            }
        })
    }

    function addImgRow() {
        
        $.ajax({
            url: 'scripts/add_img.php',
            method: "POST",
            data: {source :  src, username : document.querySelector('.form__input').value, name : time},
        
            success: function (data) {
                        console.log(data)
                    }
            });
            

    }

    console.log(addImgRow);

    btPost.addEventListener("click", () => {
        formPubli.classList.add('open');
        canvasBox.classList.add('none');
    })

    btclose.addEventListener("click", () => {
        formPubli.classList.remove('open');
        canvasBox.classList.remove('none');
    })

    btClear.addEventListener("click", () => {
        console.log('Bartosz est trop beau !')
        $(".drawapp-box__canvas").drawr("clear");
    })

    btReset.addEventListener("click", () => {
        $(".drawapp-box__canvas").drawr({
            "enable_tranparency" : false,
            "canvas_width" : 1080,
            "canvas_height" : 1528
        });
    })

    btPubli.addEventListener("click", (e) => {
        e.preventDefault();
        save_canvas($(".active-drawr")[0]);
        addImgRow()
    })

}

