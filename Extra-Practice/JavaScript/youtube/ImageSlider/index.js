const images = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    if (images.length > 0) {
        images[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= images.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = images.length - 1;
    } else {
        slideIndex = index;
    }
    images.forEach(image => {
        image.classList.remove('displaySlide');
    });
    images[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
    resetInterval();
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
    resetInterval();
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}
