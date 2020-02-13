let correcto;
let incorrecto;
let enblanco;
let resultado;


let button= document.getElementById('botoncalcular');

button.addEventListener('click',calcular);

function calcular (){

    correcto = Number ( document.getElementById('correcto').value);
    incorrecto = Number ( document.getElementById('incorrecto').value);
    enblanco = Number ( document.getElementById('blanco').value);

    resultado= (correcto * 4) + (incorrecto * (-1)) + (enblanco * 0);


    let imprimirrespuesta = document.getElementById('imprimirrespuesta');

    imprimirrespuesta.innerText = resultado;

}