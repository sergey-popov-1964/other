const multisliderButtonNext = document.querySelector('.multislider__btn_next');
const multisliderButtonPrev = document.querySelector('.multislider__btn_prev');
const multisliderImageWrapper = document.querySelectorAll('.multislider__img-wrapper');
const multisliderImage = document.querySelectorAll('.multislider__img');

let currentMultisliderImage = 0; // номер картинки которая в данный момент отображается первой

// multiSliderStep - количество картинок отображаемых уменьшеннное на 1
// для изменения количества картинок в слайдере изменяем количество столбцов
// в Grid в классе .multislider__wrapper и количество установленных классов
// multislider__img_active по умолчанию у тега img
let multiSliderStep = 2

let nextImageWrapper

// Установка кнопки Prev в неактивное состояние при начальной загрузке
multisliderButtonPrev.setAttribute("disabled", "disabled");
multisliderButtonPrev.classList.add('multislider__btn_inactive');

function clearButtonNext() {
  for (i = currentMultisliderImage; i <= currentMultisliderImage + multiSliderStep; i++) {
    multisliderImage[i].classList.remove('multislider_move_left');
  }
  if ((currentMultisliderImage + multiSliderStep + 1) < multisliderImageWrapper.length) {
    multisliderButtonNext.removeAttribute("disabled");
  }
  nextImageWrapper.removeAttribute("style");
}

function clearButtonPrev() {
  for (i = currentMultisliderImage; i <= currentMultisliderImage + multiSliderStep; i++) {
    multisliderImage[i].classList.remove('multislider_move_right');
  }
  if (currentMultisliderImage > 0) {
    multisliderButtonPrev.removeAttribute("disabled");
  }
  nextImageWrapper.removeAttribute("style");
}

function showNextMultisliderImage() {
  let currentImageWrapper = multisliderImageWrapper[currentMultisliderImage]; // текущая первая обертка слайдера
  nextImageWrapper = multisliderImageWrapper[currentMultisliderImage + 1]; // следующая обертка слайдера

  // устанавливаем у следующей обертки бекграундом изображение текущего первого слайда
  nextImageWrapper.setAttribute("style", "background-image: url(" + currentImageWrapper.querySelector('.multislider__img').getAttribute("src") + ")");

  multisliderImageWrapper[currentMultisliderImage].classList.remove('multislider__img_active')
  currentMultisliderImage++
  multisliderImageWrapper[currentMultisliderImage + multiSliderStep].classList.add('multislider__img_active')

  for (let i = currentMultisliderImage; i <= currentMultisliderImage + multiSliderStep; i++) {
    multisliderImage[i].classList.add('multislider_move_left');
  }

  multisliderButtonNext.setAttribute("disabled", "disabled");
  setTimeout(clearButtonNext, 500);

  if ((currentMultisliderImage + multiSliderStep + 1) === multisliderImageWrapper.length) { // если не конец массива изображений продолжаем листать
    multisliderButtonNext.setAttribute("disabled", "disabled")
    multisliderButtonNext.classList.add('multislider__btn_inactive');
  }

  multisliderButtonPrev.removeAttribute("disabled");
  multisliderButtonPrev.classList.remove('multislider__btn_inactive');
}

function showPrevImageMultislider() {
  let currentImageWrapper = multisliderImageWrapper[currentMultisliderImage + multiSliderStep]; // текущая первая обертка слайдера
  nextImageWrapper = multisliderImageWrapper[(currentMultisliderImage + multiSliderStep - 1)]; // следующая обертка слайдера

  // устанавливаем у следующей обертки бекграундом изображение текущего первого слайда
  nextImageWrapper.setAttribute("style", "background-image: url(" + currentImageWrapper.querySelector('.multislider__img').getAttribute("src") + ")");

  multisliderImageWrapper[currentMultisliderImage + multiSliderStep].classList.remove('multislider__img_active')
  multisliderImageWrapper[currentMultisliderImage - 1].classList.add('multislider__img_active')

  for (let i = currentMultisliderImage - 1; i <= (currentMultisliderImage + multiSliderStep - 1); i++) {
    multisliderImage[i].classList.add('multislider_move_right');
  }
  currentMultisliderImage--
  multisliderButtonPrev.setAttribute("disabled", "disabled");
  setTimeout(clearButtonPrev, 500);

  if (currentMultisliderImage === 0) { // если не начало массива изображений продолжаем листать
    multisliderButtonPrev.setAttribute("disabled", "disabled");
    multisliderButtonPrev.classList.add('multislider__btn_inactive');
  }

  multisliderButtonNext.removeAttribute("disabled");
  multisliderButtonNext.classList.remove('multislider__btn_inactive');
}

multisliderButtonNext.addEventListener('click', showNextMultisliderImage);
multisliderButtonPrev.addEventListener('click', showPrevImageMultislider);