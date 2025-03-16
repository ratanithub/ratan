const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;
const imageWidth = document.querySelector('.slider-images img').clientWidth;

nextButton.addEventListener('click', () => {
    if (index < sliderImages.children.length - 1) {
        index++;
        sliderImages.style.transform = `translateX(${-index * imageWidth}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        sliderImages.style.transform = `translateX(${-index * imageWidth}px)`;
    }
});
