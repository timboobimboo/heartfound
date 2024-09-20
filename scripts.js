// INTRO DYNAMIC TYPEWRITER EFFECT

const intro1 = document.getElementById('intro1');
const intro2 = document.getElementById('intro2');

const introP1 = intro1.children;
const introP2 = intro2.children;

const introBtn1 = document.getElementById('introBtn1');

// Intro1 Animation
for (let i=0; i < introP1.length ; i++) {

    var characterCount = introP1[i].innerText.length - 1;

    var animationTime = characterCount/15;

    var prevSib = introP1[i].previousElementSibling;

    introP1[i].style.width = '0%';
    introP1[i].style.animation = 'typing ' + animationTime + 's steps(' + characterCount + '), cursor .7s step-end infinite alternate'
    introP1[i].style.animationDelay = '1s';
    introP1[i].style.animationFillMode = 'forwards';
    // introP[i].style.animationDuration = animationTime + 's';
    // introP[i].style.animationTimingFunction = 'steps(' + characterCount + ')';


    if (i > 0)  {
        introP1[i].style.border = '0';
        introP1[i].style.animationPlayState  = 'paused';
        
        prevSib.addEventListener("animationend", animStart)
    
        function animStart() {
            introP1[i].style.borderRight = '0.1em solid';
            introP1[i].style.animationPlayState = 'running';
        }
    }    

    introP1[i].addEventListener("animationend", delCur)

    function delCur() {
        introP1[i].style.borderRight = '0';
    }
}

// Intro2 Animation
for (let i=0; i < introP2.length ; i++) {

    var characterCount = introP2[i].innerText.length;

    var animationTime = characterCount/20;

    var prevSib = introP2[i].previousElementSibling;

    introP2[i].style.width = '0%';
    introP2[i].style.animation = 'typing ' + animationTime + 's steps(' + characterCount + '), cursor .7s step-end infinite alternate'
    introP2[i].style.animationDelay = '1s';
    introP2[i].style.animationFillMode = 'forwards';

    if (i > 0)  {
        introP2[i].style.border = '0';
        introP2[i].style.animationPlayState  = 'paused';
        
        prevSib.addEventListener("animationend", animStart)
    
        function animStart() {
            introP2[i].style.borderRight = '0.1em solid';
            introP2[i].style.animationPlayState = 'running';
        }
    }

    introP2[i].addEventListener("animationend", delCur)

    function delCur() {
        introP2[i].style.borderRight = '0';
    }






}

// FadeOut Animation
const fadeout = document.getElementsByClassName('fadeout');
for (let m = 0; m < fadeout.length; m++) {

    var fadeoutParent = fadeout[m].parentElement.parentElement;

    fadeoutParent.addEventListener('animationend', fadeOutPlay);

    function fadeOutPlay() {
        fadeout[m].style.animation = 'typeout 1.5s steps(24) 1s forwards running ';
    }
}

// rainbow animation
const rainbow = document.getElementsByClassName('rainbow');
console.log(rainbow);

for (let n = 0; n < rainbow.length; n++) {

    var rainbowParent = rainbow[n].parentElement;

    rainbowParent.addEventListener('animationend', rainbowPlay);

    function rainbowPlay() {
        rainbow[n].style.animation = 'rainbow'+[n] + ' 2s forwards';
    }
    console.log(rainbowParent)

}

function introSeq2() {

    for (let i=0; i < introP2.length ; i++) {
        introP2[i].style.animation ='none';
        introP2[i].style.width = '100%';
        introP2[i].style.border = '0';
    }

}

function introSeq1() {
    introBtn1.style.display = 'none';
    intro2.style.display = 'block';
}

