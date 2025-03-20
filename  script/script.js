const buttonMask = document.querySelector('#mask')
const maskerImg = document.querySelector('#masker')

const buttonEyes = document.querySelector('#eyes')
const oogschaduwImg = document.querySelector('#oogschaduw')

const buttonEyelashes = document.querySelector('#eyelashes')
const mascaraImg = document.querySelector('#mascara')

const buttonCheeks = document.querySelector('#cheeks')
const blushImg = document.querySelector('#blush')

const buttonRefresh = document.querySelector('#refresh')
const illustratiepoppetjeImg = document.querySelector('#illustratiepoppetje')

let maskvisible = false
let eyesvisible = false
let eyelashesvisible = false
let cheeksvisible = false
let refreshvisible = false

function mask() {
    if (maskvisible){
    maskerImg.classList.remove('onzichtbaar');
    maskvisible = false
}   else {
    maskerImg.classList.add('onzichtbaar')
    maskvisible = true 
}
}

function eyes() {
    if (eyesvisible) {
        oogschaduwImg.classList.remove('onzichtbaar');
        eyesvisible = false
    } else {
        oogschaduwImg.classList.add('onzichtbaar')
        eyesvisible = true
    }
}

function eyelashes(){
    if (eyelashesvisible) {
        mascaraImg.classList.remove('onzichtbaar');
        eyelashesvisible = false
    } else {
        mascaraImg.classList.add('onzichtbaar');
        eyelashesvisible = true
    }
}

function cheeks() {
    if (cheeksvisible) {
        blushImg.classList.remove('onzichtbaar');
        cheeksvisible = false 
    } else {
        blushImg.classList.add('onzichtbaar')
        cheeksvisible = true
    }
    }

function refresh() {
    if(refreshvisible) {
        illustratiepoppetjeImg.add('onzichtbaar');
        refreshvisible = false
    }
}

buttonMask.addEventListener('click', mask)
buttonEyes.addEventListener('click', eyes)
buttonEyelashes.addEventListener('click', eyelashes)
buttonCheeks.addEventListener('click', cheeks)
buttonRefresh.addEventListener('click',refresh)

