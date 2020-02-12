
/**
 * Se declaran las variables que se utilizaran en el código
 */
let numero1; //se agrega el tipo de número con number y dos puntos
let numero2;
let resultado;

/**se declara variable button y se le asigna el boton de calcular */
let button = document.getElementById('btncalcular');

button.addEventListener('click',suma);

function suma(){
    numero1 = Number( document.getElementById('ipNumero1').value);
    numero2 = Number( document.getElementById('ipNumero2').value);

    resultado = numero1 + numero2;

    let ImprimirResultado = document.getElementById('ImprimirResultado');

    ImprimirResultado.innerText = resultado;
}