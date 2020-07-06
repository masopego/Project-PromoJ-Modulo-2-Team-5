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
  const storedFrame = localStorage.getItem('frame');
  if (storedData !== null) {
    localStorageForm(storedData);
    renderUserInfo(storedData);
  }
  if (storedColor !== null) {
    localStorageColor(storedColor);
  }
  if (storedFrame !== null) {
    frameHidden.classList.remove('js-frame-hidden');
    frameSwitcher.classList.remove('js-frame-button-off');
    frameSwitcher.classList.add('js-frame-button-active');
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

function localStorageColor(color) {
  if (color === '1') {
    changeToCold();
    paletteCold.setAttribute('checked', 'true');
  }
  if (color === '2') {
    changeToWarm();
    paletteWarm.setAttribute('checked', 'true');
  }
  if (color === '3') {
    changeToMedium();
    paletteMedium.setAttribute('checked', 'true');
  }
}

userName.addEventListener('keyup', updateInputHandler);
userJob.addEventListener('keyup', updateInputHandler);
userEmail.addEventListener('keyup', updateInputHandler);
userPhone.addEventListener('keyup', updateInputHandler);
userLinkedin.addEventListener('keyup', updateInputHandler);
userGithub.addEventListener('keyup', updateInputHandler);
