"use strict"

// PLUGIN CANVAS SET UP + OPTIONS

$(".drawapp-box__canvas").drawr({
    "enable_tranparency" : false,
    "canvas_width" : 1200,
    "canvas_height" : 1200
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

// FONCTION DE SAUVEGARDE DU CANVAS

function save_canvas(c) {
    var b64Image = c.toDataURL("image/png");

    fetch("scripts/save_image_b64.php", {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: b64Image
    })  .then(response => response.text())
        .then(success => console.log(success))
        .catch(error => console.log(error));
}

const btPost = document.querySelector("#post");
console.log(btPost);
console.log($(".active-drawr"));

btPost.addEventListener("click", () => {
    save_canvas($(".active-drawr")[0]);
})