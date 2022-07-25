const slides = document.querySelectorAll('.offer_slide'),
      prev = document.querySelector('.offer_slider-prev'),
      next = document.querySelector('.offer_slider-next');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = "none");

    slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

next.addEventListener('click', () => {
    plusSlides(1);
})

prev.addEventListener('click', () => {
    plusSlides(-1);
})