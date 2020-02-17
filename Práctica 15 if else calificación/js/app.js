const button = document.getElementById('btnEstado');

button.addEventListener('click',verificarCalificacion);

function verificarCalificacion(){
    const calificacion = Number (document.getElementById('inCalificacion').value);

    const imprimir = document.getElementById('imprimirEstado');


    if(calificacion > 8){
    imprimir.innerText = 'Aprobado';
    } else {
        imprimir.innerText = 'Reprobado';
        const audioRonDamon= document.getElementById('audReprobado');
        audioRonDamon.play();
    }
}