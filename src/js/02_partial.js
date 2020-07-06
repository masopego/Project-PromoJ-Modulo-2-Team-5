'use strict';

const borderPV = document.querySelector('.js-border');
const namePV = document.querySelector('.js-name');
const iconPV = document.querySelector('.js-icon');
const framePV = document.querySelector('.js-frame');
const photoPV = document.querySelector('.js-photo');

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
  framePV.classList.add('js-frame-cold');
  framePV.classList.remove('js-frame-warm', 'js-frame-medium');

  //PHOTO
  photoPV.classList.add('photo-cold');
  photoPV.classList.remove('photo-warm', 'photo-medium', 'js-photo-default');

  formData.palette = '1';
}

coldSelector.addEventListener('change', changeToCold);

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
  framePV.classList.add('js-frame-warm');
  framePV.classList.remove('js-frame-cold', 'js-frame-medium');

  //PHOTO
  photoPV.classList.add('photo-warm');
  photoPV.classList.remove('photo-cold', 'photo-medium', 'js-photo-default');

  formData.palette = '2';
  console.log(formData);
}

warmSelector.addEventListener('change', changeToWarm);

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
  framePV.classList.add('js-frame-medium');
  framePV.classList.remove('js-frame-cold', 'js-frame-warm');

  //PHOTO
  photoPV.classList.add('photo-medium');
  photoPV.classList.remove('photo-cold', 'photo-warm', 'js-photo-default');

  formData.palette = '3';
  console.log(formData);
}

mediumSelector.addEventListener('change', changeToMedium);

const frameSwitcher = document.querySelector('.js-frame-button');

const frameHidden = document.querySelector('.js-frame-hidden');

function switchFrame() {
  frameHidden.classList.toggle('js-frame-hidden');
  frameSwitcher.classList.toggle('js-frame-button-off');
  frameSwitcher.classList.toggle('js-frame-button-active');
}

frameSwitcher.addEventListener('click', switchFrame);
