const multisliderButtonNext = document.querySelector('.multislider__btn_next');
const multisliderButtonPrev = document.querySelector('.multislider__btn_prev');
const multisliderButtonStart = document.querySelector('.multislider__btn_start');
const multisliderButtonEnd = document.querySelector('.multislider__btn_end');


const multisliderImageWrapper = document.querySelectorAll('.multislider__img-wrapper');
const multisliderImage = document.querySelectorAll('.multislider__img');

let currentMultisliderImage = 0; // номер картинки которая в данный момент отображается первой

// multiSliderStep - количество картинок отображаемых уменьшеннное на 1
// для изменения количества картинок в слайдере изменяем количество столбцов
// в Grid в классе .multislider__wrapper и количество установленных классов
// multislider__img_active по умолчанию у тега img
let multiSliderStep = 2;

let nextImageWrapper;


function disableButton(nameButton) {
  nameButton.setAttribute("disabled", "disabled");
  nameButton.classList.add('multislider__btn_inactive');
}

function enableButton(nameButton) {
  nameButton.removeAttribute("disabled");
  nameButton.classList.remove('multislider__btn_inactive');
}

disableButton(multisliderButtonPrev);
disableButton(multisliderButtonStart);

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
    disableButton(multisliderButtonNext);
    disableButton(multisliderButtonEnd);

  }

  enableButton(multisliderButtonPrev);
  enableButton(multisliderButtonStart);

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
    disableButton(multisliderButtonPrev);
    disableButton(multisliderButtonStart);

  }

  enableButton(multisliderButtonNext);
  enableButton(multisliderButtonEnd);

}

function showStartImageMultislider() {
  multisliderImage.forEach(item => {
    item.classList.remove('multislider_move_right');
  })

  multisliderImageWrapper.forEach(item => {
    item.classList.remove('multislider__img_active');
  })

  for (let i = 0; i <= multiSliderStep; i++) {
    multisliderImageWrapper[i].classList.add('multislider__img_active');
  }

  currentMultisliderImage = 0
  disableButton(multisliderButtonPrev);
  disableButton(multisliderButtonStart);
  enableButton(multisliderButtonNext);
  enableButton(multisliderButtonEnd);
}

function showEndImageMultislider() {
  multisliderImage.forEach(item => {
    item.classList.remove('multislider_move_right');
  })

  multisliderImageWrapper.forEach(item => {
    item.classList.remove('multislider__img_active');
  })

  for (let i = (multisliderImageWrapper.length - multiSliderStep - 1); i <= (multisliderImageWrapper.length - 1); i++) {
    
    console.log(i)
    multisliderImageWrapper[i].classList.add('multislider__img_active');
  }
  
  currentMultisliderImage = multisliderImageWrapper.length - multiSliderStep - 1
  disableButton(multisliderButtonNext);
  disableButton(multisliderButtonEnd);
  enableButton(multisliderButtonPrev);
  enableButton(multisliderButtonStart);
}


multisliderButtonNext.addEventListener('click', showNextMultisliderImage);
multisliderButtonPrev.addEventListener('click', showPrevImageMultislider);

multisliderButtonStart.addEventListener('click', showStartImageMultislider);
multisliderButtonEnd.addEventListener('click', showEndImageMultislider);