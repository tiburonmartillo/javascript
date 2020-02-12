let numero1;
let numero2;
let resultado;

let button = document.getElementById('botoncalcular');
button.addEventListener('click',multiplicar);

function multiplicar(){
    numero1 = Number(document.getElementById('altura').value);
    numero2 = Number(document.getElementById('base').value);
    resultado= (numero1 * numero2) /2

    let calcular = document.getElementById('Calcular');

    calcular.innerText = resultado;
}