const buttonNext = document.querySelector('.slider__btn_next');
const buttonPrev = document.querySelector('.slider__btn_prev');
const clickOnImage = document.querySelector('.slider__image');

const sliderImage = document.querySelectorAll('.slider__image');
const backgroundImageSlide = document.querySelector('.slider');


let numberImage = 0;

function showNextImage() {
  backgroundImageSlide.setAttribute("style", "background-image: url(../." + sliderImage[numberImage].getAttribute('src') + ")");
  sliderImage[numberImage].classList.remove('slider__image_active');
  if (numberImage == sliderImage.length - 1) {
    numberImage = -1;
  }
  numberImage++
  sliderImage[numberImage].classList.add('slider__image_active');
  console.log(sliderImage[numberImage].getAttribute('src'));
}

function showPrevImage() {
  backgroundImageSlide.setAttribute("style", "background-image: url(../." + sliderImage[numberImage].getAttribute('src') + ")");
  sliderImage[numberImage].classList.remove('slider__image_active');
  if (numberImage == 0) {
    numberImage = sliderImage.length;
  }
  numberImage--
  sliderImage[numberImage].classList.add('slider__image_active');
}


buttonNext.addEventListener('click', showNextImage);

buttonPrev.addEventListener('click', showPrevImage);

// sliderImage.forEach((item) => {
//   item.addEventListener('click', showNextImage);
//   });

