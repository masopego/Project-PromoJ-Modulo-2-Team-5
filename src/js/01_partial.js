'use strict';

const borderPV = document.querySelector('.border-js');
const namePV = document.querySelector('.name-js');
const iconPV = document.querySelector('.icon-js');
const framePV = document.querySelector('.frame-js');

const coldSelector = document.querySelector('.cold');
const warmSelector = document.querySelector('.warm');
const mediumSelector = document.querySelector('.medium');

//COLD PALETTE

function changeToCold() {
  //BORDER
  borderPV.classList.add('border-cold');
  borderPV.classList.remove('border-warm', 'border-medium');

  //NAME
  namePV.classList.add('name-cold');
  namePV.classList.remove('name-warm', 'name-medium');

  //ICON
  iconPV.classList.add('icon-cold');
  iconPV.classList.remove('icon-warm', 'icon-medium');

  //FRAME
  framePV.classList.add('frame-cold');
  framePV.classList.remove('frame-warm', 'frame-medium');
}

coldSelector.addEventListener('click', changeToCold);

//WARM PALETTE

function changeToWarm() {
  //BORDER
  borderPV.classList.add('border-warm');
  borderPV.classList.remove('border-cold', 'border-medium');

  //NAME
  namePV.classList.add('name-warm');
  namePV.classList.remove('name-cold', 'name-medium');

  //ICON
  iconPV.classList.add('icon-warm');
  iconPV.classList.remove('icon-cold', 'icon-medium');

  //FRAME
  framePV.classList.add('frame-warm');
  framePV.classList.remove('frame-cold', 'frame-medium');
}

warmSelector.addEventListener('click', changeToWarm);

//MEDIUM PALETTE

function changeToMedium() {
  //BORDER
  borderPV.classList.add('border-medium');
  borderPV.classList.remove('border-cold', 'border-warm');

  //NAME
  namePV.classList.add('name-medium');
  namePV.classList.remove('name-cold', 'name-warm');

  //ICON
  iconPV.classList.add('icon-medium');
  iconPV.classList.remove('icon-cold', 'icon-warm');

  //FRAME
  framePV.classList.add('frame-medium');
  framePV.classList.remove('frame-cold', 'frame-warm');
}

mediumSelector.addEventListener('click', changeToMedium);
