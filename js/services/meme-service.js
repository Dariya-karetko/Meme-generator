'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: [] },
    { id: 2, url: 'img/2.jpg', keywords: [] }
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getImages(){
    return gImgs;
}

function getImg(id) {
    gMeme.selectedImgId = id;
    return gImgs[id-1]
}

function getTxt() {
    return gMeme.lines[0].txt;
}

function changeTxt(txt) {
    gMeme.lines[0].txt = txt;
}
