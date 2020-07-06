'use strict';

//constantes de los valores que introduce el usuario
const userName = query('.js-inputName');
const userJob = query('.js-inputJob');
const userEmail = query('.js-inputEmail');
const userPhone = query('.js-inputPhone');
const userLinkedin = query('.js-inputLinkedin');
const userGithub = query('.js-inputGithub');

//constantes de los lugares donde renderizaremos

const renderUserName = query('.js-name'); //hemos cambiadoo
const renderUserJob = query('.js-jobPreview');
const renderUserEmail = query('.js-emailPreview');
const renderUserPhone = query('.js-phonePreview');
const renderUserLinkedin = query('.js-linkedinPreview');
const renderUserGithub = query('.js-githubPreview');

const userData = {}; //llenaria la funcion vacía con los datos

const getFromLocalStorage = () => {
  const userDataRaw = localStorage.getItem('data');
  const userColorRaw = localStorage.getItem('color');
  const storedData = JSON.parse(userDataRaw);
  const storedColor = JSON.parse(userColorRaw);
  if (storedData !== null) {
    console.log(storedData);
    localStorageForm(storedData);
    renderUserInfo(storedData);
  }
  if (storedColor !== null) {
    console.log(storedColor);
    //localStorageColor(storedColor);
    if (storedColor === '1') {
      changeToCold();
      paletteCold.setAttribute('checked', 'true');
    }
    if (storedColor === '2') {
      changeToWarm();
      paletteWarm.setAttribute('checked', 'true');
    }
    if (storedColor === '3') {
      changeToMedium();
      paletteMedium.setAttribute('checked', 'true');
    }
  }
};

getFromLocalStorage();

function getInputValues() {
  userData.name = userName.value; //llamas al objeto.nombredelapropiedadsilasabes(si no la sabes con corchetes)
  userData.job = userJob.value;
  userData.email = userEmail.value;
  userData.phone = userPhone.value;
  userData.linkedin = userLinkedin.value;
  userData.github = userGithub.value;
}

function renderUserInfo(data) {
  renderUserName.innerHTML = data.name;
  renderUserJob.innerHTML = data.job;
  renderUserEmail.href = `mailto:${data.email}`;
  renderUserPhone.href = `tel:${data.phone}`;
  renderUserLinkedin.href = `https://linkedin.com/${data.linkedin}`;
  renderUserGithub.href = `https://github.com/${data.github}`;
  if (renderUserName.innerHTML === '') {
    renderUserName.innerHTML = 'Jeanne Baret';
  }
  if (renderUserJob.innerHTML === '') {
    renderUserJob.innerHTML = 'Botánica';
  }
} //pinta la propiedad de ese objeto que se llame name,job..

function updateInputHandler() {
  getInputValues();
  renderUserInfo(userData);
  localStorage.setItem('data', JSON.stringify(userData));
}

function localStorageForm(data) {
  userName.value = data.name;
  userJob.value = data.job;
  userEmail.value = data.email;
  userPhone.value = data.phone;
  userLinkedin.value = data.linkedin;
  userGithub.value = data.github;
}

// function localStorageColor(color) {
//   if (color.value === 1) {
//     changeToCold();
//     console.log('frío');
//   }
//   if (color.value === 2) {
//     changeToWarm();
//   }
//   if (color.value === 3) {
//     changeToMedium();
//   }
//}

userName.addEventListener('keyup', updateInputHandler);
userJob.addEventListener('keyup', updateInputHandler);
userEmail.addEventListener('keyup', updateInputHandler);
userPhone.addEventListener('keyup', updateInputHandler);
userLinkedin.addEventListener('keyup', updateInputHandler);
userGithub.addEventListener('keyup', updateInputHandler);
