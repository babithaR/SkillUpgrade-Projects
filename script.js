let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    document.querySelector('.slides').style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

showSlides(slideIndex);
