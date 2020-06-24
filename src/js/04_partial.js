//linkar nombre

const inputName = document.querySelector(".js-inputName");
const namePreview = document.querySelector(".js-namePreview");

function getValueName() {
  namePreview.innerHTML = event.currentTarget.value;
}

inputName.addEventListener("keyup", getValueName);

//linkar trabajo

const inputJob = document.querySelector(".js-inputJob");
const jobPreview = document.querySelector(".js-jobPreview");

function getValueJob() {
  jobPreview.innerHTML = event.currentTarget.value;
}

inputJob.addEventListener("keyup", getValueJob);

// js - inputJob;
// js - inputEmail;

// js - jobPreview;
// js - emailPreview;
