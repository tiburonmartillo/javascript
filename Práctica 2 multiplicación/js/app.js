let numero1;
let numero2;
let numero3;
let resultado;
let button = document.getElementById('botoncotizar');

button.addEventListener('click',multiplicar);

function multiplicar(){
    numero1 = Number( document.getElementById('metrosalto').value);
    numero2 = Number( document.getElementById('metroslargo').value);
    numero3 = Number( document.getElementById('precio').value);

    resultado = (numero1 * numero2) * numero3;

    let ImprimirResultado = document.getElementById('Resultado');

    ImprimirResultado.innerText = resultado;
}