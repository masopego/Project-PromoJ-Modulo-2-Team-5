'use strict';

let isValid = false;

formData = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: fr.result,
};

const submitButton = document.querySelector('form .js-button-share');

const formInputs = document.querySelectorAll('.js-form .form__fill input');

const textError = document.querySelector('.form__share__text--error');

const paletteInputs = document.querySelectorAll('.js-palette');

const allInputs = { formInputs, paletteInputs };

const paletteCold = document.querySelector('#cold');
const paletteWarm = document.querySelector('#warm');
const paletteMedium = document.querySelector('#medium');

allInputs.forEach((element) => {
  element.addEventListener('change', changeElement);
});

function changeElement(event) {
  validatePalette();
  getValuesFromForm();
  validateForm();

  if (isValid === true) {
    submitButton.removeAttribute('disabled');
    textError.classList.add('js-hidden');
  } else {
    submitButton.setAttribute('disabled', 1);
    textError.classList.remove('js-hidden');
  }

  console.log(formData);
}

function getValuesFromForm() {
  formInputs.forEach((input) => {
    formData[input.name] = input.value;
  });
}

function validatePalette() {
  if (paletteCold.checked === true) {
    formData.palette = 1;
  }
  if (paletteWarm.checked === true) {
    formData.palette = 2;
  }
  if (paletteMedium.checked === true) {
    formData.palette = 3;
  }
}

function validateForm() {
  isValid = true;

  for (let item in formData) {
    if (formData[item] === '') {
      isValid = false;
    }
  }
  return isValid;
}
