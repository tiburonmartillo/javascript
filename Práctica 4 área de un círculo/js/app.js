let radio;
let resultado;
const constantePi = 3.1416;

let button = document.getElementById('btnarea');
button.addEventListener('click',AreaCirculo);

function AreaCirculo(){
    radio= Number(document.getElementById('inputradio').value);
    // resultado= constantePi * (radio*radio)
    let radioelevado= Math.pow(radio,2);  //libreria math pow es para elevar números primero el número a elevar y luego las veces que se eleva
    resultado= radioelevado * Math.PI;
    let ImprimirResultado = document.getElementById('ImprimirResultado');

    ImprimirResultado.innerText = resultado;
}