const multisliderButtonNext = document.querySelector('.multislider__btn_next');
const multisliderButtonPrev = document.querySelector('.multislider__btn_prev');

const multisliderImageWrapper = document.querySelectorAll('.multislider__img-wrapper');
const multisliderImage = document.querySelectorAll('.multislider__img');

let numberFirstMultisliderImage = 0;
let numberEndMultisliderImage = 2;
let currentMultisliderImage = 3;

function showNextMultisliderImage() {

  let currentImageWrapper = multisliderImageWrapper[numberFirstMultisliderImage]; // текущая первая обертка слайдера
  let nextImageWrapper = multisliderImageWrapper[numberFirstMultisliderImage+1]; // следующая обертка слайдера

  // устанавливаем у следующей обертки бекграундом изображение текущего первого слайда
  nextImageWrapper.setAttribute("style", "background-image: url(" + currentImageWrapper.querySelector('.multislider__img').getAttribute("src") + ")");


  multisliderImageWrapper[numberFirstMultisliderImage].classList.remove('multislider__img_active')
  numberFirstMultisliderImage++
  multisliderImageWrapper[numberFirstMultisliderImage + 2].classList.add('multislider__img_active')

  for (let i = numberFirstMultisliderImage; i <= numberFirstMultisliderImage + 2; i++) {
    multisliderImage[i].classList.add('multislider_move_left');
  }

  multisliderButtonNext.setAttribute("disabled", "disabled");
  let timerId = setTimeout(clearNumber, 500)
}


function showPrevImageMultislider() {
  multisliderImageWrapper[0].classList.remove('multislider__img_active')

  multisliderImage[1].classList.add('multislider_move_left');
  multisliderImage[2].classList.add('multislider_move_left');
  multisliderImage[3].classList.add('multislider_move_left');
}

multisliderButtonNext.addEventListener('click', showNextMultisliderImage);
multisliderButtonPrev.addEventListener('click', showPrevImageMultislider);



function clearNumber() {
  for (i = numberFirstMultisliderImage; i <= numberFirstMultisliderImage + 2; i++) {
    multisliderImage[i].classList.remove('multislider_move_left');
    multisliderButtonNext.removeAttribute("disabled");
  }
}








