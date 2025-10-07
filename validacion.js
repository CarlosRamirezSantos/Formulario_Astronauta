document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('astroForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    clearErrorsAndStyles();

    let valid = true;


const nombre = document.getElementById('nombre');

if (!nombre.value || nombre.value.trim().length < 3) {
  setInvalid(nombre, 'error-nombre', 'Acceso denegado: nombre demasiado corto.');
  valid = false;
} else {
  setValid(nombre);
}




  });

  
  function clearErrorsAndStyles() {
    
  }


  
function setInvalid(element, errorId, message) {
  element.classList.add('invalid');
  const err = document.getElementById(errorId);
  if (err) err.textContent = message;
}

function setValid(element) {
  element.classList.add('valid');
  const err = document.getElementById('error-' + element.id);
  if (err) err.textContent = '';
}

});
