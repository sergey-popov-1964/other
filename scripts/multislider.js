const multisliderButtonNext = document.querySelector('.multislider__btn_next');
const multisliderButtonPrev = document.querySelector('.multislider__btn_prev');

const multisliderImageWrapper = document.querySelectorAll('.multislider__img-wrapper');
const multisliderImage = document.querySelectorAll('.multislider__img');

let numberFirstMultisliderImage = 0;
let numberEndMultisliderImage = 2;
let currentMultisliderImage = 0;

function clearNumber() {
  for (i = currentMultisliderImage; i <= currentMultisliderImage + 2; i++) {
    multisliderImage[i].classList.remove('multislider_move_left');
    multisliderButtonNext.removeAttribute("disabled");
  }
}

function showNextMultisliderImage() {
  let currentImageWrapper = multisliderImageWrapper[currentMultisliderImage]; // текущая первая обертка слайдера
  let nextImageWrapper = multisliderImageWrapper[currentMultisliderImage + 1]; // следующая обертка слайдера

  // устанавливаем у следующей обертки бекграундом изображение текущего первого слайда
  nextImageWrapper.setAttribute("style", "background-image: url(" + currentImageWrapper.querySelector('.multislider__img').getAttribute("src") + ")");

  multisliderImageWrapper[currentMultisliderImage].classList.remove('multislider__img_active')
  currentMultisliderImage++
  multisliderImageWrapper[currentMultisliderImage + 2].classList.add('multislider__img_active')

  for (let i = currentMultisliderImage; i <= currentMultisliderImage + 2; i++) {
    multisliderImage[i].classList.add('multislider_move_left');
  }

  if (currentMultisliderImage + 3 < multisliderImageWrapper.length) { // если не конец массива изображений продолжаем листать
    multisliderButtonNext.setAttribute("disabled", "disabled");
    let timerId = setTimeout(clearNumber, 500);
  } else {
    multisliderButtonNext.setAttribute("disabled", "disabled");
    multisliderButtonNext.classList.add('multislider__btn_inactive');
  }
}

function showPrevImageMultislider() {
  multisliderImageWrapper[0].classList.remove('multislider__img_active')

  multisliderImage[1].classList.add('multislider_move_left');
  multisliderImage[2].classList.add('multislider_move_left');
  multisliderImage[3].classList.add('multislider_move_left');
}

multisliderButtonNext.addEventListener('click', showNextMultisliderImage);
multisliderButtonPrev.addEventListener('click', showPrevImageMultislider);