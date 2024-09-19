const intro = document.getElementById('intro');
const introP = intro.children;

// DYNAMIC TYPEWRITER EFFECT
for (let i=0; i < introP.length ; i++) {

    var characterCount = introP[i].innerHTML.length;

    var animationTime = characterCount/10;

    var prevSib = introP[i].previousElementSibling;

    introP[i].style.animationDuration = animationTime + 's';
    introP[i].style.animationTimingFunction = 'steps(' + characterCount + ')';

    if (i > 0)  {
        introP[i].style.border = '0'
        introP[i].style.animationPlayState  = 'paused';
        

        prevSib.addEventListener("animationend", animStart)
        introP[1].addEventListener("animationend", delCur)

        function delCur() {
            introP[i].style.borderRight = '0';
        }
    
        function animStart() {
            // introP[i].style.animationDelay = '1s';
            introP[i].style.borderRight = '0.1em solid';
            introP[i].style.animationPlayState = 'running';
        }

    } else {    introP[1].addEventListener("animationend", delCur)

        function delCur() {
            introP[i].style.borderRight = '0';
        }
    
    }
    console.log(prevSib)
}