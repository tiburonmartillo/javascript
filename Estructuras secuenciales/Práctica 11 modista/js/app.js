let metros;
let btnconvertir;
let pulgadas;

metros = Number(document.getElementById('metros').value);
btnconvertir = document.getElementById('btnconvertir');

btnconvertir.addEventListener('click',calcular);

function calcular(){
    pulgadas = metros * 39.37;

    let imprimirpulgadas = document.getElementById('pulgadas');
    imprimirpulgadas.innerText = pulgadas;
}
