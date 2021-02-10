'use strict'

var gImgs = [{id: 1, url: 'img/1.jpg', keywords: []}];

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

function getImg(){
    return gImgs[0].url
}

function getTxt(){
    return gMeme.lines[0].txt;
}

function changeTxt(txt){
    gMeme.lines[0].txt = txt;
}
