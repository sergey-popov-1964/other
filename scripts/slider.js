const buttonNext = document.querySelector('.slider__btn_next');
const buttonPrev = document.querySelector('.slider__btn_prev');
const clickOnImage = document.querySelector('.slider__image');

const sliderImage = document.querySelectorAll('.slider__image');
const backgroundImageSlide = document.querySelector('.slider__wrapper');

const sliderDots = document.querySelectorAll('.slider__dots-item');

let numberImage = 0;
let numberDot = 0;
let currentImage = 0;

function clearAllStyle() {
   backgroundImageSlide.setAttribute("style", "background-image: url(" + sliderImage[numberImage].getAttribute('src') + ")");
   sliderImage[numberImage].classList.remove('slider__image_active');
   sliderImage[numberImage].classList.remove('slider_move_left');
   sliderImage[numberImage].classList.remove('slider_move_right');
   sliderDots[numberDot].classList.remove('slider__dots-item_active');
}

function moveSliderLeft() {
   sliderImage[numberImage].classList.add('slider__image_active');
   sliderImage[numberImage].classList.add('slider_move_left');
   sliderDots[numberDot].classList.add('slider__dots-item_active');
}

function moveSliderRight() {
   sliderImage[numberImage].classList.add('slider_move_right');
   sliderImage[numberImage].classList.add('slider__image_active');
   sliderDots[numberDot].classList.add('slider__dots-item_active');
}

function showNextImage() {
   clearAllStyle();
   if (numberImage == sliderImage.length - 1) {
      numberImage = -1;
   }
   numberImage++;
   numberDot = numberImage;
   currentImage = numberImage;
   moveSliderLeft();
}

function showPrevImage() {
   clearAllStyle();
   if (numberImage == 0) {
      numberImage = sliderImage.length;
   }
   numberImage--;
   numberDot = numberImage;
   currentImage = numberImage;
   moveSliderRight();
}

buttonNext.addEventListener('click', showNextImage);
buttonPrev.addEventListener('click', showPrevImage);

sliderDots.forEach((item, indexDot) => {
   item.addEventListener('click', () => {
      clearAllStyle();
      numberDot = indexDot;
      numberImage = numberDot;
      if (numberDot < currentImage) {
         if (numberImage == 0) {
            currentImage = numberDot+1;
         } else {
            currentImage = numberDot;
         }
         moveSliderRight();
      } else {
         if (currentImage == numberDot) {
            currentImage = numberDot;
         } else {
            currentImage = numberDot;
         }
         moveSliderLeft();
      }
   })
});