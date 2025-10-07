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

const email = document.getElementById('email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!email.value || !emailRegex.test(email.value)) {
  setInvalid(email, 'error-email', 'Correo galáctico inválido.');
  valid = false;
} else {
  setValid(email);
}

const codigo = document.getElementById('codigo');
const pwd = codigo.value || '';
const hasUpper = /[A-Z]/.test(pwd);
const hasNumber = /[0-9]/.test(pwd);
const hasSymbol = /[!@#$%&*]/.test(pwd);

if (!pwd || pwd.length < 8 || !hasUpper || !hasNumber || !hasSymbol) {
  setInvalid(codigo, 'error-codigo', 'Código rechazado: debe tener mayúscula, número y símbolo.');
  valid = false;
} else {
  setValid(codigo);
}

const edad = document.getElementById('edad');
const edadVal = Number(edad.value);

if (!edad.value || isNaN(edadVal) || edadVal < 25 || edadVal > 50) {
  setInvalid(edad, 'error-edad', 'Edad fuera del rango espacial (25-50).');
  valid = false;
} else {
  setValid(edad);
}

const especialidadElems = Array.from(document.getElementsByName('especialidad'));
const especialidadSeleccionada = especialidadElems.some(r => r.checked);

if (!especialidadSeleccionada) {
  document.getElementById('error-especialidad').textContent = 'Selecciona tu especialidad astronauta.';
  especialidadElems.forEach(r => r.parentElement.classList.add('invalid'));
  valid = false;
} else {
  especialidadElems.forEach(r => {
    if (r.checked) r.parentElement.classList.add('valid');
  });
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
