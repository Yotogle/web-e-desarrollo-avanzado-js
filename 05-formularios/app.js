 document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

// Variables
const nombre = document.getElementById('nombre').value.trim();
const correo = document.getElementById('correo').value.trim();
const telefono = document.getElementById('telefono').value;
const intereses = document.querySelectorAll('input[name="intereses"]:checked');
const horario = document.querySelector('input[name="horario"]:checked');
const fecha = document.getElementById('fecha').value;
const hora = document.getElementById('hora').value;

// Expresiones regulares
const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/; // Solo letras y espacios (2-50 caracteres)
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato básico de email
const regexTelefono = /^\d{10,}$/; // Mínimo 10 dígitos

// Validar campos obligatorios
if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
}

// Validar nombre
if (!regexNombre.test(nombre)) {
    alert('El nombre debe contener solo letras y tener entre 3 y 50 caracteres.');
    return;
}

// Validar correo
if (!regexCorreo.test(correo)) {
    alert('Por favor, introduce un correo electrónico válido (ejemplo: usuario@dominio.com).');
    return;
}

// Validar teléfono (elimina caracteres no numéricos primero)
const telefonoLimpio = telefono.replace(/\D/g, '');
if (!regexTelefono.test(telefonoLimpio)) {
    alert('El teléfono debe tener al menos 10 dígitos (sin espacios, guiones, etc.).');
    return;
}

// Validar fecha
if (fecha && new Date(fecha) < new Date().setHours(0, 0, 0, 0)) {
    alert('La fecha no puede ser anterior al día actual.');
    return;
}

console.log(`Nombre: ${nombre}, Correo: ${correo}, Teléfono: ${telefonoLimpio}, Fecha: ${fecha}, Hora: ${hora}`);

// Mostrar mensaje de éxito
alert('Registro exitoso. ¡Gracias por registrarte!');
 });