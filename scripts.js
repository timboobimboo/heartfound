// INTRO DYNAMIC TYPEWRITER EFFECT

const intro1 = document.getElementById('intro1');
const intro2 = document.getElementById('intro2');

const introP1 = intro1.children;
const introP2 = intro2.children;

const introBtn1 = document.getElementById('introBtn1');
const introBtn2 = document.getElementById('introBtn2');
const introBtn = document.getElementsByClassName('intro-button');

const fadeout = document.getElementsByClassName('fadeout');
const rainbow = document.getElementsByClassName('rainbow');

console.log(introP2)

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

    // start conditiontion
    introP2[i].style.width = '0%';
    introP2[i].style.animation = 'typing ' + animationTime + 's steps(' + characterCount + '), cursor .7s step-end infinite alternate'
    introP2[i].style.animationDelay = '1s';
    introP2[i].style.animationFillMode = 'forwards';

    // animation sequence
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
        introP2[i].style.border = '0';
    }

}

// Target last textbox
const introP2End = intro2.lastElementChild;
introP2End.addEventListener("animationend", introSeq2);




// FadeOut Animation
for (let m = 0; m < fadeout.length; m++) {

    var fadeoutParent = fadeout[m].parentElement.parentElement;

    fadeoutParent.addEventListener('animationend', fadeOutPlay);

    function fadeOutPlay() {
        fadeout[m].style.animation = 'typeout 1.5s steps(24) 1s forwards running ';
    }
}

// rainbow animation
for (let n = 0; n < rainbow.length; n++) {

    var rainbowParent = rainbow[n].parentElement;

    rainbowParent.addEventListener('animationend', rainbowPlay);

    function rainbowPlay() {
        rainbow[n].style.animation = 'rainbow'+[n] + ' 2s forwards';
    }
}

const introOptions = document.getElementById('intro-options');
const optionsBtn = introOptions.children;
for (let i=0;i<optionsBtn.length;i++) {
    optionsBtn[i].style.width = '0%';
    optionsBtn[i].style.animationPlayState='paused';
    optionsBtn[i].style.border = '0';
    optionsBtn[i].style.animationFillMode = 'forwards';

    introP2End.addEventListener("animationend", optionsShow);

    function optionsShow() {
        optionsBtn[i].style.animationDelay = '2s';
        optionsBtn[i].style.animationPlayState='running';

    }
}

function introSeq2() {

    for (let i=0; i < introP2.length ; i++) {
        introP2[i].style.animation ='none';
        introP2[i].style.width = '100%';
        introP2[i].style.border = '0';
    }

    for (let i=0; i < introBtn.length ; i++) {
        introBtn[i].style.cursor = 'default';
    }

    for (let n = 0; n < rainbow.length; n++) {
        rainbow[n].style.backgroundImage = 'var(--gradient' + [n] +')';
        rainbow[n].style.color = 'var(--text-transparent)';
    }

    for (let m = 0; m < fadeout.length; m++) {
        fadeout[m].style.width = '0%';
    }

    for (let i=0; i < optionsBtn.length; i++) {
        optionsBtn[i].style.animationDelay = '1.5s';
        optionsBtn[i].style.animationPlayState='running';
    }

    introBtn2.onclick = null;
}

function introSeq1() {
    introBtn1.style.display = 'none';
    intro2.style.display = 'block';
}


const confirmReply = document.getElementById('confirm-reply');
const denyReply = document.getElementById('deny-reply');
const logoContainer = document.getElementById('logo-container');

function showConfirm() {
    denyReply.style.display = 'none';
    confirmReply.style.display = 'block';
    confirmReply.style.width = '0%';
    confirmReply.style.animationDelay = '0.5s';
    confirmReply.style.animationPlayState = 'running';

    setTimeout(finishIntro, 4700);
    function finishIntro() {
        introBtn2.style.display = 'none';
        logoContainer.style.display = 'grid';
        logoContainer.firstElementChild.style.border = '0';

    }
}

function showDeny() {
    confirmReply.style.display = 'none';
    denyReply.style.display = 'block';
    denyReply.style.width = '0%';
    denyReply.style.animationDelay = '0.5s';
    denyReply.style.animationPlayState = 'running';

    setTimeout(nuke, 5000)
    function nuke() {
    document.body.innerHTML='';
    document.body.style.backgroundColor = 'rgb(26, 26, 26)';
    }
}


const hflogo = document.getElementById('heartfoundLogo')
const address = document.getElementById('address')
hflogo.addEventListener('animationend', function() {
address.style.display= 'block';
})