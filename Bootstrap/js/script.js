function InfoBtn(target){
    target.classList.toggle('clicked-info');
}

let goUpBtn = document.getElementById('goUpBtn');
let firstSlide = document.getElementById('firstSlide');
let firstSlideText = document.getElementById('firstSlideText');

function AppearAfterFirstSlide(){
    if(window.scrollY < 600){
        goUpBtn.style.animation = '0.3s linear 1 GoUpBtnAnimOut forwards';
        firstSlide.style.animation = '2s ease-in-out HandAnim forwards';
        firstSlideText.style.animation = '3s ease-in-out TextAnim forwards';
    }
    else
    {
        goUpBtn.style.animation = '0.3s linear GoUpBtnAnimIn forwards';
        firstSlide.style.animation = '0.5s ease-in-out OpacityUp forwards';
        firstSlideText.style.animation = '0.5s ease-in-out OpacityUp forwards';
    }
}