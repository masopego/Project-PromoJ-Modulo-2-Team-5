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

// const allInputs = formInputs.concat(paletteInputs);

const submitButton = query('form .js-button-share');

const formInputs = document.querySelectorAll('.js-form .form__fill input');

const textError = query('.form__share__text--error');

const paletteInputs = document.querySelectorAll('.js-palette');

// const paletteCold = query('#cold');
// const paletteWarm = query('#warm');
// const paletteMedium = query('#medium');

formInputs.forEach((element) => {
  element.addEventListener('change', changeElement);
});

paletteInputs.forEach((element) => {
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
    if (input.type !== 'file') {
      formData[input.name] = input.value;
    }
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

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  // Usa fetch() para enviar una petición POST con datos codificados en JSON .
  const url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(formData), // data can be `string` or {object}!
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
});

function showURL(result) {
  if (result.success) {
    console.log('<a href=' + result.cardURL + '>' + result.cardURL + '</a>');
  } else {
    console.log('aloja');
  }
}
