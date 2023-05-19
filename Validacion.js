function validarformulario(){
    var nombre = document.forms["formulario"]["nombre"].value;
    var apellido = document.forms["formulario"]["apellido"].value;
    var email = document.forms["formulario"]["email"].value;
    var dni = document.forms["formulario"]["dni"].value;
    var telefono = document.forms["formulario"]["telefono"].value;

    if (nombre === "") {
        alert("Escribir nombre.");
        return false
    }

    if (apellido === "") {
        alert("Escribir apellido.");
        return false
    }

    if (email === "") {
        alert("Escribir email.");
        return false;
      } else if (!validarEmail(email)) {
        alert("Formato de email inválido.");
        return false;
      }

      if (dni === "") {
        alert("Escribir DNI.");
        return false;
      } else if (!validardni(dni)) {
        alert("DNI necesita ser un número.");
        return false;}

      if (telefono === "") {
        alert("Escribir número telefónico.");
        return false;
      } else if (!validarTelefono(telefono)) {
        alert("Formato de número telefónico inválido.");
        return false;
      }
return false
}

function validarEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

function validarTelefono(telefono) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(telefono);
  }
function validardni(input) {
        return /^\d+$/.test(input);
  }
