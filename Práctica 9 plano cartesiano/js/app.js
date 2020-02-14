let puntoA;
let puntoB;
let puntoA1;
let puntoB1;
let resultado;
let formula;
let button = document.getElementById('botoncalcular');
button.addEventListener('click',calcular);

function calcular(){
    puntoA = Number (document.getElementById('puntoA').value);
    puntoB = Number (document.getElementById('puntoB').value);
    puntoA1 = Number (document.getElementById('puntoA1').value);
    puntoB1 = Number (document.getElementById('puntoB1').value);

    formula = Math.pow((puntoA1 - puntoA),2) + Math.pow((puntoB1 - puntoB),2);
    resultado = Math.sqrt(formula);

    let imprimirdistancia = document.getElementById('imprimirdistancia');
    imprimirdistancia.innerText = resultado;
}