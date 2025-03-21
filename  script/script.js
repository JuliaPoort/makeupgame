const buttonEyes = document.querySelector('#eyes')
const oogschaduwImg = document.querySelector('#oogschaduw')

const buttonEyelashes = document.querySelector('#eyelashes')
const mascaraImg = document.querySelector('#mascara')

const buttonCheeks = document.querySelector('#cheeks')
const blushImg = document.querySelector('#blush')

const buttonLips = document.querySelector('#lips')
const lippenstiftImg = document.querySelector('#lippenstift')

let eyesvisible = false
let eyelashesvisible = false
let cheeksvisible = false
let lipsvisible = false

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

function lips() {
    if (lipsvisible) {
        lippenstiftImg.classList.remove('onzichtbaar');
        lipsvisible = false
    } else {
        lippenstiftImg.classList.add('onzichtbaar')
        lipsvisible = true
    }
    
}


buttonEyes.addEventListener('click', eyes)
buttonEyelashes.addEventListener('click', eyelashes)
buttonCheeks.addEventListener('click', cheeks)
buttonLips.addEventListener('click', lips)
