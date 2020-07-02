'use strict';

// reset

const resetElement = document.querySelector('.button__reset');
const palleteDefault = document.querySelector('#cold');

// función para poner todos las tareas a no completadas
// esta función debe modificar los datos y después pintar y escuchar eventos
function reset(ev) {
  // prevengo la acción por defecto
  ev.preventDefault();
  // recorro todas las tareas
  for (const input of allInputs) {
    // para cada tarea pongo su propiedad complete a false
    input.value = '';
    changeToCold(); //cambia css
    palleteDefault.checked = true; //cambia checked a pallete cold css
    formData.pallete = 1; //cambia value
  }
}

resetElement.addEventListener('click', reset);
