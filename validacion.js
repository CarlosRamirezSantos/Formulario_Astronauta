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
