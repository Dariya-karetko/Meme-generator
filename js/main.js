'use strict'

var gElCanvas;
var gCtx;
var gCurrTxt;

init()
function init() {
    gElCanvas = document.getElementById('canvas');
    gCtx = gElCanvas.getContext('2d')
    drawImg()
    preventDefault()


}

function onAddTxt() {
    var elTxt = document.querySelector('input[name=text]');
    var txt = elTxt.value;
    gCurrTxt = txt;
    changeTxt(gCurrTxt)
    randerCanvas()
}

function randerCanvas() {
    drawImg()
}

function preventDefault() {
    document.getElementById('form').addEventListener("submit", function (e) {
        e.preventDefault();
        onAddTxt()
    });
}


function drawImg() {
    var image = getImg();
    const img = new Image();
    img.src = image;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        var text = getTxt()
        drawText(text, 200, 45)
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '45px Impact'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}