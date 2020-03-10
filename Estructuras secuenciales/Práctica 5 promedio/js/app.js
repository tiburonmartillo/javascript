let matricula;
let materia1;
let materia2;
let materia3;
let materia4;
let materia5;
let promedio;

let boton = document.getElementById('obtenerpromedio');
boton.addEventListener('click',calcular);

function calcular(){
    materia1 = Number (document.getElementById('materia1').value);
    materia2 = Number (document.getElementById('materia2').value);
    materia3 = Number (document.getElementById('materia3').value);
    materia4 = Number (document.getElementById('materia4').value);
    materia5 = Number (document.getElementById('materia5').value);
    promedio = (materia1 + materia2 + materia3 + materia4 + materia5) / 5

    let imprimirpromedio = document.getElementById('imprimirpromedio');

    imprimirpromedio.innerText = promedio;

    let matricula = Number (document.getElementById('matricula').value);

    let imprimirmatricula = document.getElementById('imprimirmatricula');

    imprimirmatricula.innerText = matricula;
}