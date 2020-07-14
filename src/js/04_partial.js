function validationUserName() {
  if (userName.value === '') {
    userName.classList.add('js-border-input');
    userName.parentElement.classList.add('js-error');
  } else {
    userName.classList.remove('js-border-input');
    userName.parentElement.classList.remove('js-error');
  }
}

function validationJob() {
  if (userJob.value === '') {
    userJob.classList.add('js-border-input');
    userJob.parentElement.classList.add('js-error');
  } else {
    userJob.classList.remove('js-border-input');
    userJob.parentElement.classList.remove('js-error');
  }
}

function validationEmail() {
  if (userEmail.value === '' || !validateEmail(userEmail.value)) {
    userEmail.classList.add('js-border-input');
    userEmail.parentElement.classList.add('js-error');
    /*to deactivate icon in preview card */
    renderUserEmail.classList.add('js-icon-deactivated');
  } else {
    userEmail.classList.remove('js-border-input');
    userEmail.parentElement.classList.remove('js-error');
    renderUserEmail.classList.remove('js-icon-deactivated');
  }
}

function validationPhone() {
  if (userPhone.value === '' || !validatePhone(userPhone.value)) {
    userPhone.classList.add('js-border-input');
    userPhone.parentElement.classList.add('js-error');
    /*to deactivate icon in preview card */
    renderUserPhone.classList.add('js-icon-deactivated');
  } else {
    userPhone.classList.remove('js-border-input');
    userPhone.parentElement.classList.remove('js-error');
    renderUserPhone.classList.remove('js-icon-deactivated');
  }
}

function validationLinkedin() {
  if (userLinkedin.value === '') {
    userLinkedin.classList.add('js-border-input');
    userLinkedin.parentElement.classList.add('js-error');
    /*to deactivate icon in preview card */
    renderUserLinkedin.classList.add('js-icon-deactivated');
  } else {
    userLinkedin.classList.remove('js-border-input');
    userLinkedin.parentElement.classList.remove('js-error');
    renderUserLinkedin.classList.remove('js-icon-deactivated');
  }
}

function validationGithub() {
  if (userGithub.value === '') {
    userGithub.classList.add('js-border-input');
    userGithub.parentElement.classList.add('js-error');
    /*to deactivate icon in preview card */
    renderUserGithub.classList.add('js-icon-deactivated');
  } else {
    userGithub.classList.remove('js-border-input');
    userGithub.parentElement.classList.remove('js-error');
    renderUserGithub.classList.remove('js-icon-deactivated');
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhone(phone) {
  const ph = /^([9,7,6]{1})+([0-9]{8})$/;
  return ph.test(phone);
}

userName.addEventListener('keyup', validationUserName);
userJob.addEventListener('keyup', validationJob);
userEmail.addEventListener('keyup', validationEmail);
userPhone.addEventListener('keyup', validationPhone);
userLinkedin.addEventListener('keyup', validationLinkedin);
userGithub.addEventListener('keyup', validationGithub);

/*función para activar el aviso de campos vacíos al formulario cuando se clica en la sección comparte */
const shareClick = document.querySelector('.form__share');

function emptyFieldValidator() {
  validationUserName();
  validationJob();
  validationEmail();
  validationLinkedin();
  validationGithub();
  validateEmail();
}

shareClick.addEventListener('click', emptyFieldValidator);
