function InfoBtn(target){
    target.classList.toggle('clicked-info');
}

let goUpBtn = document.getElementById('goUpBtn');
function AppearAfterFirstSlide(){
    if(window.scrollY < 600){
        goUpBtn.style.animation = '0.3s linear 1 GoUpBtnAnimOut forwards'
    }
    else goUpBtn.style.animation = '0.3s linear GoUpBtnAnimIn forwards';
}