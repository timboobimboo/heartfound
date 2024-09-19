// INTRO DYNAMIC TYPEWRITER EFFECT

const intro = document.getElementById('intro');
const introP = intro.children;


for (let i=0; i < introP.length ; i++) {

    var characterCount = introP[i].innerHTML.length;

    var animationTime = characterCount/10;

    var prevSib = introP[i].previousElementSibling;

    introP[i].style.width = '0%';
    introP[i].style.animation = 'typing ' + animationTime + 's steps(' + characterCount + '), cursor .7s step-end infinite alternate'
    introP[i].style.animationDelay = '1s';
    introP[i].style.animationFillMode = 'forwards';
    // introP[i].style.animationDuration = animationTime + 's';
    // introP[i].style.animationTimingFunction = 'steps(' + characterCount + ')';


    if (i > 0)  {
        introP[i].style.border = '0';
        introP[i].style.animationPlayState  = 'paused';
        
        prevSib.addEventListener("animationend", animStart)
    
        function animStart() {
            introP[i].style.borderRight = '0.1em solid';
            introP[i].style.animationPlayState = 'running';
        }
    }    

    introP[i].addEventListener("animationend", delCur)

    function delCur() {
        introP[i].style.borderRight = '0';
    }

    console.log(prevSib)
}