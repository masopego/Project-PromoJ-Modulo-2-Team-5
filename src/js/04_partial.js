'use strict';
const username = document.querySelector('#name');
const userjob = document.querySelector('#job');
//const userimage = document.querySelector('#image');
const useremail = document.querySelector('#email');
const userphone = document.querySelector('#phone');
const userlinkedin = document.querySelector('#linkedin');
const usergithub = document.querySelector('#github');

function validationUserName() {
  if (username.value === '') {
    username.classList.add('border-input');
    username.parentElement.classList.add('error');
  } else {
    username.classList.remove('border-input');
    username.parentElement.classList.remove('error');
  }
}

function validationJob() {
  if (userjob.value === '') {
    userjob.classList.add('border-input');
    userjob.parentElement.classList.add('error');
  } else {
    userjob.classList.remove('border-input');
    userjob.parentElement.classList.remove('error');
  }
}

// /*if (userimage.value === '') {
//   userimage.classList.add('border-input');
// } else {
//   userimage.classList.remove('border-input');
// }*/

function validationEmail() {
  if (useremail.value === '') {
    useremail.classList.add('border-input');
    useremail.parentElement.classList.add('error');
  } else {
    useremail.classList.remove('border-input');
    useremail.parentElement.classList.remove('error');
  }
}

function validationPhone() {
  if (userphone.value === '') {
    userphone.classList.add('border-input');
    userphone.parentElement.classList.add('error');
  } else {
    userphone.classList.remove('border-input');
    userphone.parentElement.classList.remove('error');
  }
}

function validationLinkedin() {
  if (userlinkedin.value === '') {
    userlinkedin.classList.add('border-input');
    userlinkedin.parentElement.classList.add('error');
  } else {
    userlinkedin.classList.remove('border-input');
    userlinkedin.parentElement.classList.remove('error');
  }
}

function validationGithub() {
  if (usergithub.value === '') {
    usergithub.classList.add('border-input');
    usergithub.parentElement.classList.add('error');
  } else {
    usergithub.classList.remove('border-input');
    usergithub.parentElement.classList.remove('error');
  }
}

username.addEventListener('change', validationUserName);
userjob.addEventListener('change', validationJob);
//userimage.addEventListener('change', validationUserName);
useremail.addEventListener('change', validationEmail);
userphone.addEventListener('change', validationPhone);
userlinkedin.addEventListener('change', validationLinkedin);
usergithub.addEventListener('change', validationGithub);
