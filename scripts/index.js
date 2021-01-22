const buttonNext = document.querySelector('.slider__btn_next');
const buttonPrev = document.querySelector('.slider__btn_prev');
const clickOnImage = document.querySelector('.slider__image');

const sliderImage = document.querySelectorAll('.slider__image');
const backgroundImageSlide = document.querySelector('.slider');

const sliderDots = document.querySelectorAll('.dots__item');


let numberImage = 0;
let numberDot = 0;

function clearAllStyle() {
   // backgroundImageSlide.setAttribute("style", "background-image: url(../." + sliderImage[numberImage].getAttribute('src') + ")");
   backgroundImageSlide.setAttribute("style", "background-image: url(" + sliderImage[numberImage].getAttribute('src') + ")");

   console.log(sliderImage[numberImage].getAttribute('src'));
   sliderImage[numberImage].classList.remove('slider__image_active');
   sliderImage[numberImage].classList.remove('slider_move_left');
   sliderImage[numberImage].classList.remove('slider_move_right');
   sliderDots[numberDot].classList.remove('dots__item_active');
}

function moveSliderLeft() {
   sliderImage[numberImage].classList.add('slider__image_active');
   sliderImage[numberImage].classList.add('slider_move_left');
   sliderDots[numberDot].classList.add('dots__item_active'); 
}

function moveSliderRight() {
   sliderImage[numberImage].classList.add('slider_move_right');
   sliderImage[numberImage].classList.add('slider__image_active');
   sliderDots[numberDot].classList.add('dots__item_active');
}

function showNextImage() {
   clearAllStyle();
   if (numberImage == sliderImage.length - 1) {
      numberImage = -1;
   }
   numberImage++;
   numberDot = numberImage
   moveSliderLeft()
}

function showPrevImage() {
   clearAllStyle();
   if (numberImage == 0) {
      numberImage = sliderImage.length;
   }
   numberImage--;
   numberDot = numberImage
   moveSliderRight()
}


buttonNext.addEventListener('click', showNextImage);
buttonPrev.addEventListener('click', showPrevImage);

sliderDots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
      clearAllStyle();
      numberDot = indexDot;
      numberImage = numberDot
      moveSliderLeft()
	})
});