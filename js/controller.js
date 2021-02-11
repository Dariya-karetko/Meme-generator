'use strict'

var gElCanvas;
var gCtx;
var gCurrTxt;
var gCurrImg;
var gCurrTxtSize;

var gIsAddLine = false;
var gLineIdx = 0;



init()
function init() {
    gElCanvas = document.getElementById('canvas');
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    onAddTxt()
    preventDefault()
}

function onAddLine() {
    // document.getElementById('text-input').value = '';
    var textVal = document.getElementById('text-input').value
    addLine(textVal)
    if (!gIsAddLine) {
        gIsAddLine = true;
        gLineIdx = 1;
    } else {
        gIsAddLine = false
        gLineIdx = 0;
    }
    renderAlltxt()
}

function onDecreaseIncrease(val) {
    if (val === 'decrease') {
        gCurrTxtSize--
        changeTxtSize(gCurrTxtSize)
    } else {
        gCurrTxtSize++
        changeTxtSize(gCurrTxtSize)
    }
    if (gCurrImg) {
        drawImg()
    }

}

function renderGallery() {
    var images = getImages();
    var strHTMLs = images.map(function (img) {
        return `<img class="gallery-img cursor-pointer" onclick="onChangeImg(${img.id})" src="${img.url}" alt="">`
    })
    document.querySelector('.img-content').innerHTML = strHTMLs.join('');
}

function preventDefault() {
    document.getElementById('form').addEventListener("submit", function (e) {
        e.preventDefault();
    });
}

function onChangeImg(id) {
    var img = getImg(id)
    gCurrImg = img;
    drawImg()
}

function onAddTxt() {
    document.getElementById('text-input').addEventListener('keyup', function () {
        var text = document.getElementById('text-input').value;
        changeTxt(text, gLineIdx)
        if (gCurrImg) {
            drawImg()
        }
    });
}

function drawImg() {
    const img = new Image();
    img.src = gCurrImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        var meme = getMeme(gLineIdx)
        renderAlltxt(meme.txt, meme.x, meme.y)
    }
}

function renderAlltxt() {
    var memes = getAllMemes()
    memes.forEach(function(meme) {
        gCurrTxtSize = meme.size;
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = `${meme.color}`
        gCtx.font = `${gCurrTxtSize}px Impact`
        gCtx.textAlign = `${meme.align}`
        gCtx.fillText(meme.txt, meme.x, meme.y)
        gCtx.strokeText(meme.txt, meme.x, meme.y)
    })
}

