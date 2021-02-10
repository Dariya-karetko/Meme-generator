'use strict'

var gElCanvas;
var gCtx;
var gCurrTxt;
var gCurrImg;

init()
function init() {
    gElCanvas = document.getElementById('canvas');
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    onAddTxt()
    preventDefault()  
}

function renderGallery(){
    var images = getImages();
    var strHTMLs = images.map(function (img){
        return `<img onclick="onChangeImg(${img.id})" src="${img.url}" alt="">`
    })
    document.querySelector('.img-content').innerHTML = strHTMLs.join('');
}

function preventDefault() {
    document.getElementById('form').addEventListener("submit", function (e) {
        e.preventDefault();
        onAddTxt()
    });
}

function onChangeImg(id){
    var img = getImg(id)
    gCurrImg = img;
    drawImg(gCurrImg.url)
}

function onAddTxt() {
    document.getElementById('text-input').addEventListener('keyup', function () {
        var text = document.getElementById('text-input').value;
        gCurrTxt = text;
        changeTxt(gCurrTxt)
        if (gCurrImg){
            drawImg(gCurrImg.url) 
        }
    });
}

function drawImg(image) {
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







