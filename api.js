document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("astroForm");

  const campos = {
    nombre: document.getElementById("nombre"),
    email: document.getElementById("email"),
    codigo: document.getElementById("codigo"),
    edad: document.getElementById("edad"),
    especialidad: document.querySelectorAll('input[name="especialidad"]'),
    planeta: document.getElementById("planeta"),
    fecha: document.getElementById("fecha"),
    fisica: document.getElementById("fisica"),
    expediente: document.getElementById("expediente"),
    comentarios: document.getElementById("comentarios"),
    acepto: document.getElementById("acepto"),
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valido = true;

    limpiarErrores();

    // Validar nombre
    if (!campos.nombre.checkValidity()) {
      mostrarError("nombre", "El nombre debe tener al menos 3 caracteres.");
      valido = false;
    }

    // Validar email
    if (!campos.email.checkValidity()) {
      mostrarError("email", "Introduce un correo electrónico válido.");
      valido = false;
    }

    // Validar código
    if (!campos.codigo.checkValidity()) {
      mostrarError("codigo", "El código debe tener 8 caracteres mínimo.");
      valido = false;
    }

    // Validar edad
    if (!campos.edad.checkValidity()) {
      mostrarError("edad", "La edad debe estar entre 25 y 50 años.");
      valido = false;
    }

    // Validar especialidad (radio)
    if (![...campos.especialidad].some(e => e.checked)) {
      mostrarError("especialidad", "Selecciona una especialidad.");
      valido = false;
    }

    // Validar planeta
    if (!campos.planeta.checkValidity()) {
      mostrarError("planeta", "Selecciona tu planeta de origen.");
      valido = false;
    }

    // Validar fecha
    if (!campos.fecha.checkValidity()) {
      mostrarError("fecha", "Indica una fecha válida.");
      valido = false;
    }

    // Validar expediente 
    if (!campos.expediente.checkValidity()) {
      mostrarError("expediente", "Sube un archivo PDF.");
      valido = false;
    }

    // Validar comentarios 
    if (campos.comentarios.value && campos.comentarios.value.length < 10) {
      mostrarError("comentarios", "Debe tener al menos 10 caracteres.");
      valido = false;
    }

    // Validar aceptación checkbox
    if (!campos.acepto.checked) {
      mostrarError("acepto", "Debes aceptar los riesgos de la misión.");
      valido = false;
    }

    if (valido) {
      document.getElementById("success-message").textContent =
        "Formulario enviado correctamente";
      form.reset();
    } else {
      document.getElementById("success-message").textContent = "";
    }
  });

  function mostrarError(id, mensaje) {
    document.getElementById("error-" + id).textContent = mensaje;
  }

  function limpiarErrores() {
    form.querySelectorAll(".error-message").forEach(div => div.textContent = "");
  }
});
