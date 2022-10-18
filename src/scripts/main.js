"use strict"

if ($().drawr) {
    console.log('oui')
}

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
