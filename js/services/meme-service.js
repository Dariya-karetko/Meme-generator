'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: [] },
    { id: 2, url: 'img/2.jpg', keywords: [] },
    { id: 3, url: 'img/3.jpg', keywords: [] },
    { id: 4, url: 'img/4.jpg', keywords: [] },
    { id: 5, url: 'img/5.jpg', keywords: [] },
    { id: 6, url: 'img/6.jpg', keywords: [] },
    { id: 7, url: 'img/7.jpg', keywords: [] },
    { id: 8, url: 'img/8.jpg', keywords: [] },
    { id: 9, url: 'img/9.jpg', keywords: [] },
    { id: 10, url: 'img/10.jpg', keywords: [] },
    { id: 11, url: 'img/11.jpg', keywords: [] },
    { id: 12, url: 'img/12.jpg', keywords: [] },
    { id: 13, url: 'img/13.jpg', keywords: [] },
    { id: 14, url: 'img/14.jpg', keywords: [] },
    { id: 15, url: 'img/15.jpg', keywords: [] },
    { id: 16, url: 'img/16.jpg', keywords: [] },
    { id: 17, url: 'img/17.jpg', keywords: [] },
    { id: 18, url: 'img/18.jpg', keywords: [] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        { txt: '', size: 45, align: 'center', color: 'white', x: 200, y: 45 },
        { txt: '', size: 45, align: 'center', color: 'white', x: 200, y: 355 }
    ]
}

function getImages() {
    return gImgs;
}

function getImg(id) {
    var img = gImgs.find(img => img.id === id)
    return img
}

function getCurrLineIdx() {
    return gMeme.selectedLineIdx;
}

function changeTxt(text, idx) {
    gMeme.lines[idx].txt = text;
}

function getAllMemes() {
    return gMeme.lines
}

function getCurrMeme() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getCurrSize(lineIdx) {
    return gMeme.lines[lineIdx].size;

}

function changeTxtSize(size, idx) {
    gMeme.lines[idx].size = size
}

function addLine(textVal) {
    gMeme.selectedLineIdx = 1;
    gMeme.lines[gMeme.selectedLineIdx].txt = textVal
}

function switchLine(lineIdx) {
    if (!lineIdx) {
        gMeme.selectedLineIdx = 1;
    } else {
        gMeme.selectedLineIdx = 0;
    }
    return gMeme.lines[gMeme.selectedLineIdx]
}

