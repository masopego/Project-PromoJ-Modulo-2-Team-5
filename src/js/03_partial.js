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
