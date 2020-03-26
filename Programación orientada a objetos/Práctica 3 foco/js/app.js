eventListener();

const foco = new Foco();
const imagen = document.getElementById('imagen');

function eventListener() {
    document.getElementById('btnIniciar').addEventListener('click', cambiarEstado);
}

function cambiarEstado() {
    imagen.src = foco.cambiarEstado();
    
}