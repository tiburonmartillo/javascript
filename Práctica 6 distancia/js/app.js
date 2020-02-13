let velocidad;
let tiempo;
let distancia;
let button = document.getElementById('calcular');
button.addEventListener('click',calcular);

function calcular()
{
    velocidad = Number(document.getElementById('velocidad').value);
    tiempo = Number(document.getElementById('tiempo').value);

    distancia = velocidad * tiempo ;

    let imprimirdistancia = document.getElementById('imprimirdistancia');

    imprimirdistancia.innerText = distancia;
}