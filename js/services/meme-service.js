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
            size: 45,
            align: 'center',
            color: 'white',
            x: 200,
            y: 45
        }
    ]
}

function getAllMemes(){
    return gMeme.lines
}

function addLine(textVal) {
    if (textVal === '') return
    gMeme.lines.push({ txt: textVal, size: 45, align: 'center', x: 200, y: 355 })
    return gMeme;

}

function getMeme(lineIdx){
    return gMeme.lines[lineIdx];
}

function getImages() {
    return gImgs;
}

function getImg(id) {
    gMeme.selectedImgId = id;
    return gImgs[id - 1]
}



function changeTxt(text, idx) {
    
    gMeme.lines[idx].txt = text;
    return gMeme.lines[idx];
}

function changeTxtSize(size) {
    gMeme.lines[0].size = size
}
