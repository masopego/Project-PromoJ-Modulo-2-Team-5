'use strict';
const username = query('#name');
const userjob = query('#job');
//const userimage = query('#image');
const useremail = query('#email');
const userphone = query('#phone');
const userlinkedin = query('#linkedin');
const usergithub = query('#github');

function validationUserName() {
  if (username.value === '') {
    username.classList.add('js-border-input');
    username.parentElement.classList.add('js-error');
  } else {
    username.classList.remove('js-border-input');
    username.parentElement.classList.remove('js-error');
  }
}

function validationJob() {
  if (userjob.value === '') {
    userjob.classList.add('js-border-input');
    userjob.parentElement.classList.add('js-error');
  } else {
    userjob.classList.remove('js-border-input');
    userjob.parentElement.classList.remove('js-error');
  }
}

// /*if (userimage.value === '') {
//   userimage.classList.add('js-border-input');
// } else {
//   userimage.classList.remove('js-border-input');
// }*/

function validationEmail() {
  if (useremail.value === '' || !validateEmail(useremail.value)) {
    //!useremail.value.includes('@')
    useremail.classList.add('js-border-input');
    useremail.parentElement.classList.add('js-error');
  } else {
    useremail.classList.remove('js-border-input');
    useremail.parentElement.classList.remove('js-error');
  }
}

function validationPhone() {
  if (userphone.value === '' || !validatePhone(userphone.value)) {
    userphone.classList.add('js-border-input');
    userphone.parentElement.classList.add('js-error');
  } else {
    userphone.classList.remove('js-border-input');
    userphone.parentElement.classList.remove('js-error');
  }
}

function validationLinkedin() {
  if (userlinkedin.value === '') {
    userlinkedin.classList.add('js-border-input');
    userlinkedin.parentElement.classList.add('js-error');
  } else {
    userlinkedin.classList.remove('js-border-input');
    userlinkedin.parentElement.classList.remove('js-error');
  }
}

function validationGithub() {
  if (usergithub.value === '') {
    usergithub.classList.add('js-border-input');
    usergithub.parentElement.classList.add('js-error');
  } else {
    usergithub.classList.remove('js-border-input');
    usergithub.parentElement.classList.remove('js-error');
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

username.addEventListener('keyup', validationUserName);
userjob.addEventListener('keyup', validationJob);
//userimage.addEventListener('change', validationUserName);
useremail.addEventListener('keyup', validationEmail);
userphone.addEventListener('keyup', validationPhone);
userlinkedin.addEventListener('keyup', validationLinkedin);
usergithub.addEventListener('keyup', validationGithub);
