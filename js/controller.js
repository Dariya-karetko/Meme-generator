'use strict'

var gElCanvas;
var gCtx;
var gCurrImg;
var gIsAddLine = false;


function init() {
    gElCanvas = document.getElementById('canvas');
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    onAddTxt()
    preventDefault()
}

function onGallery() {
    init()
}

function preventDefault() {
    document.getElementById('form').addEventListener("submit", function (e) {
        e.preventDefault();
    });
}

function renderGallery() {
    var images = getImages();
    var strHTMLs = images.map(function (img) {
        return `<img class="gallery-img cursor-pointer" onclick="onChangeImg(${img.id})" src="${img.url}" alt="">`
    })
    document.querySelector('.img-content').innerHTML = strHTMLs.join('');
}

function onChangeImg(id) {
    document.querySelector('.editor').classList.remove('display-none')
    document.querySelector('.image-gallery').style.display = 'none'
    var img = getImg(id)
    gCurrImg = img;
    drawImg()
}

function onAddTxt() {
    document.getElementById('text-input').addEventListener('keyup', function () {
        var text = document.getElementById('text-input').value;
        var lineIdx = getCurrLineIdx()
        changeTxt(text, lineIdx)
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
        onAddBorder()
        renderAlltxt()

    }
}

function onAddBorder() {
    var currMeme = getCurrMeme()
    if (currMeme.txt === '') return
    var x = currMeme.x
    var y = currMeme.y
    var height = currMeme.size
    var txt = currMeme.txt
    var width = currMeme.size * txt.length
    var xStart = x - (width / 2)
    var yStart = y - height + 6
    gCtx.beginPath()
    gCtx.strokeStyle = 'black'
    gCtx.rect(xStart, yStart, width, height)
    gCtx.stroke()
}

function renderAlltxt() {
    var memes = getAllMemes()
    memes.forEach(function (meme) {
        gCtx.lineWidth = 2
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = `${meme.color}`
        gCtx.font = `${meme.size}px Impact`
        gCtx.textAlign = `${meme.align}`
        gCtx.fillText(meme.txt, meme.x, meme.y)
        gCtx.strokeText(meme.txt, meme.x, meme.y)
    })
}

function onDecreaseIncrease(val) {
    var currIdx = getCurrLineIdx()
    var currSize = getCurrSize(currIdx)
    if (val === 'decrease') {
        currSize--
        changeTxtSize(currSize, currIdx)
    } else {
        currSize++
        changeTxtSize(currSize, currIdx)
    }
    if (gCurrImg) {
        drawImg()
    }
}

function onAddLine() {
    document.getElementById('text-input').value = '';
    var textVal = document.getElementById('text-input').value

    if (!gIsAddLine) {
        gIsAddLine = true;
        addLine(textVal)
    } else {
        gIsAddLine = false
        document.getElementById('text-input').value = textVal;
    }
    renderAlltxt()
}

function onSwitchLine() {
    var currLineIdx;
    if (!gCurrImg) return
    currLineIdx = getCurrLineIdx()
    var selectedLine = switchLine(currLineIdx);
    currLineIdx = getCurrLineIdx()
    document.getElementById('text-input').value = selectedLine.txt
    drawImg()
}

function onDeleteLine() {
    document.getElementById('text-input').value = '';
    deleteLine()
    drawImg()
}


function onDownloadCanvas(elLink) {
    randerCanvasForDownload()
    download(elLink)
}

function download(elLink){
    const data = gElCanvas.toDataURL();
    elLink.href = data;
}

function randerCanvasForDownload() {
    var imgId = getCurrImgIdx()
    var currImg = getImg(imgId)
    const img = new Image();
    img.src = currImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        renderAlltxt()
    }
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}
