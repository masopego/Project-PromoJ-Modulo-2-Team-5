'use strict';

//constantes de los valores que introduce el usuario
const userName = document.querySelector('.js-inputName');
const userJob = document.querySelector('.js-inputJob');
const userEmail = document.querySelector('.js-inputEmail');
const userPhone = document.querySelector('.js-inputPhone');
const userLinkedin = document.querySelector('.js-inputLinkedin');
const userGithub = document.querySelector('.js-inputGithub');

//constantes de los lugares donde renderizaremos

const renderUserName = document.querySelector('.js-name'); //hemos cambiadoo
const renderUserJob = document.querySelector('.js-jobPreview');
const renderUserEmail = document.querySelector('.js-phonePreview');
const renderUserPhone = document.querySelector('.js-emailPreview');
const renderUserLinkedin = document.querySelector('.js-linkedinPreview');
const renderUserGithub = document.querySelector('.js-githubPreview');

const userData = {}; //llenaria la funcion vacía con los datos

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
}

userName.addEventListener('keyup', updateInputHandler);
userJob.addEventListener('keyup', updateInputHandler);
userEmail.addEventListener('keyup', updateInputHandler);
userPhone.addEventListener('keyup', updateInputHandler);
userLinkedin.addEventListener('keyup', updateInputHandler);
userGithub.addEventListener('keyup', updateInputHandler);
