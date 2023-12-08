
function actualizarTexto() {

    var inputTexto = document.getElementById("inputTexto").value;

    document.getElementById("textoActualizado").value = inputTexto;
}

function cerrarTexto() {
    var formulario = document.getElementById("miTexto");
    formulario.style.display = "none";
}

function abrirTexto() {
    var formulario = document.getElementById("miTexto");
    formulario.style.display = "block";
}
