const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" alt="Banana"></div>',
    '<div><img src="img/girl.svg" alt="Girl"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>',
];

const carouselSlide = document.querySelector('.products__carousel-slide');

let currentSlide = 0;

function renderSlide() {
    carouselSlide.innerHTML = slides[currentSlide];
    if (window.innerWidth >= 768) {
        const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        carouselSlide.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth >= 1024 ) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            carouselSlide.innerHTML += slides[thirdSlideIdx];
        }
    }
}

renderSlide();

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}

setInterval(nextSlide, 2000);

const btnNext = document.querySelector('.products__carousel-btn-next');
const btnPrev = document.querySelector('.products__carousel-btn-prev');

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);