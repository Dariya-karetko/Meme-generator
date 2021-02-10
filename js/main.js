'use strict'

var gElCanvas;
var gCtx;
var gCurrTxt;
var gCurrImg;
var gTxtSize = 45;
var gTextCoords = { x: 200, y: 45 }

init()
function init() {
    gElCanvas = document.getElementById('canvas');
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    onAddTxt()
    preventDefault()
}

function onChangeLine() {
    
    gTextCoords = { x: 200, y: 355 }
}

function onChangeLine() {

}

function onDecrease() {
    gTxtSize--
}

function onIncrease() {
    gTxtSize++
}

function renderGallery() {
    var images = getImages();
    var strHTMLs = images.map(function (img) {
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

function onChangeImg(id) {
    var img = getImg(id)
    gCurrImg = img;
    drawImg(gCurrImg.url)
}



function onAddTxt() {
    document.getElementById('text-input').addEventListener('keyup', function () {
        var text = document.getElementById('text-input').value;
        gCurrTxt = text;
        changeTxt(gCurrTxt)
        if (gCurrImg) {
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
        drawText(text, gTextCoords.x, gTextCoords.y)
    }
}

function drawText(text, x, y) {
    console.log(x, y);
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${gTxtSize}px Impact`
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}







