function principal() {
    descripcion = document.getElementById("descripcion");
    descripcion.addEventListener("input", validacion, false);
    validacion();
}
function validacion() {
    if (descripcion.value == '') {
        descripcion.setCustomValidity('Por favor, ingresar una descripci&oacute;n');
    } else {
        descripcion.setCustomValidity('');
        descripcion.style.background = '#FFFFFF';
        descripcion.style.color = '#000000';
    }
}
window.addEventListener("load", principal, false);