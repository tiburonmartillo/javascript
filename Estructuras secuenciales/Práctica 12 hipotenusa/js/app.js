const button = document.getElementById('btncalcular');

button.addEventListener('click',calcular);

function calcular(){
let ladoA = Number (document.getElementById('ladoA').value);
let ladoB = Number (document.getElementById('ladoB').value);

hipotenusa = Math.sqrt(Math.pow(ladoA,2) + Math.pow(ladoB,2));
let imprimir = document.getElementById('imprimirhipotenusa');
imprimir.innerText = hipotenusa;
}
