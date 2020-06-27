'use strict';

//constantes de los valores que introduce el usuario
const userName = document.querySelector('.js-inputName');
const userJob = document.querySelector('.js-inputJob');
// const userEmail = document.querySelector('.js-inputEmail');
// const userPhone = document.querySelector('.js-phone');
const userLinkedin = document.querySelector('.js-linkedin');
// const userGithub = document.querySelector('.js-github');

//constantes de los lugares donde renderizaremos

const renderUserName = document.querySelector('.js-namePreview');
const renderUserJob = document.querySelector('.js-jobPreview');
// const renderUserEmail = document.querySelector('.js-phonePreview');
// const renderUserPhone = document.querySelector('.js-emailPreview');
const renderUserLinkedin = document.querySelector('.js-linkedinPreview');
// const renderUserGithub = document.querySelector('.js-githubPreview');

const userData = {}; //llenarea la funcion vacía con los datos

function getInputValues() {
  userData.name = userName.value; //llamas al objeto.nombredelapropiedadsilasabes(si no la sabes con corchetes)
  userData.job = userJob.value;
  // userData.email = userEmail.value;
  // userData.phone = userPhone.value;
  userData.linkedin = userLinkedin.value;
  // userData.github = userGithub.value;
}

function renderUserInfo(data) {
  renderUserName.innerHTML = data.name;
  renderUserJob.innerHTML = data.job;
  // renderUserEmail.innerHTML = data.email;
  // renderUserPhone.innerHTML = data.phone;
  renderUserLinkedin.innerHTML = data.linkedin;
  // renderUserGithub.innerHTML = data.github;
  if (renderUserName.innerHTML === '') {
    renderUserName.innerHTML = 'Jeanne Baret';
  }
  if (renderUserJob.innerHTML === '') {
    renderUserJob.innerHTML = 'Botanist';
  }
} //pinta la propiedad de ese objeto que se llame name,job..

function updateInputHandler() {
  getInputValues();
  renderUserInfo(userData);
}

userName.addEventListener('keyup', updateInputHandler);
userJob.addEventListener('keyup', updateInputHandler);
// userEmail.addEventListener('keyup', updateInputHandler);
// userPhone.addEventListener('keyup', updateInputHandler);
userLinkedin.addEventListener('keyup', updateInputHandler);
// userGithub.addEventListener('keyup', updateInputHandler);
