function InfoBtn(target){
    target.classList.toggle('clicked-info');
}

let invisible = document.getElementById('invisible');
function AppearAfterFirstSlide(){
    if(window.scrollY < 600){
        invisible.classList.add('invisible');
    }
    else invisible.classList.remove('invisible');
}