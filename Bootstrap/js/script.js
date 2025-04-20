let goUpBtn = document.getElementById('goUpBtn');
// let firstSlide = document.getElementById('firstSlide');
// let firstSlideText = document.getElementById('firstSlideText');
// let shards = document.getElementById('shards');

function AppearAfterFirstSlide(){
    if(pageYOffset < document.documentElement.clientHeight){
        goUpBtn.style.animation = '0.3s linear 1 GoUpBtnAnimOut forwards';
        // firstSlide.style.animation = '2s ease-in-out HandAnim forwards';
        // firstSlideText.style.animation = '3s ease-in-out TextAnim forwards';
    }
    else
    {
        goUpBtn.style.animation = '0.3s linear GoUpBtnAnimIn forwards';
        // firstSlide.style.animation = '0.5s ease-in-out OpacityUp forwards';
        // firstSlideText.style.animation = '0.5s ease-in-out OpacityUp forwards';
        // shards.style.animation = '0.5s ease-in-out OpacityDown forwards';
    }
}

let reviews = document.querySelectorAll('.review');

function PressLike(target){
    let likeCount = parseInt(target.textContent);
    if (target.className == ('like')){
        target.classList.replace('like', 'likeFilled');
        likeCount++;
        target.textContent = likeCount;
    }
    else if (target.className == ('likeFilled')){
        target.classList.replace('likeFilled','like');
        likeCount--;
        target.textContent = likeCount;
    }
	return false;
}

function checkPosition() {
    reviews.forEach(rev => {
    let rect = rev.getBoundingClientRect();
    
    if (rect.left < 50 || rect.right > window.innerWidth - 200) {
        rev.style.opacity = '0.3';
        rev.style.top = '20px';
        rev.style.transform = 'scale(0.95)';
    }
    else {
        rev.style.opacity = '1';
        rev.style.top = '0px';
        rev.style.transform = 'scale(1)';
    }
    })
    requestAnimationFrame(checkPosition);
}

checkPosition();

let body = document.querySelector('body');

let modalBg = document.querySelector('.modal-bg');

let toModal = document.querySelectorAll('.toModal');
let closeModalBtn = document.querySelectorAll('.modal-close-btn');

let modalWindows = document.querySelectorAll('.modal-body');

let activeModalIndex = null;

function closeAllModals() {
    modalWindows.forEach((window, index) => {
        if (index === activeModalIndex)
        {
            return;
        }
        window.classList.remove('modal-active');
        window.classList.add('modal-inactive');
    });
}
toModal.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        closeAllModals();
        let modalWindow = modalWindows[index];
        modalWindow.classList.add('modal-active');
        modalWindow.classList.remove('modal-inactive');
        modalBg.classList.add('modal-bg-visible');
        activeModalIndex = index;
    });
});
closeModalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (activeModalIndex !== null) {
            let modalWindow = modalWindows[activeModalIndex];
            modalWindow.classList.remove('modal-active');
            modalWindow.classList.add('modal-inactive');
            modalBg.classList.remove('modal-bg-visible');
            activeModalIndex = null;
        }
    });
});

let shards = document.querySelectorAll('.carousel-element');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            shards.forEach(shard => shard.classList.remove('opacity-down'));
            shards[0].classList.add('appearAnim');
            shards[1].classList.add('appearAnimSkewRev');
            shards[2].classList.add('appearAnimRect');
            shards[3].classList.add('appearAnimSkew');
            shards[4].classList.add('appearAnimRev');
        } else {
            shards.forEach(shard => shard.classList.add('opacity-down'));
            shards[0].classList.remove('appearAnim');
            shards[1].classList.remove('appearAnimSkewRev');
            shards[2].classList.remove('appearAnimRect');
            shards[3].classList.remove('appearAnimSkew');
            shards[4].classList.remove('appearAnimRev');
        }
    });
}, { rootMargin: '0px 0px -50px 0px', threshold: 0 });

shards.forEach((shard) => observer.observe(shard));