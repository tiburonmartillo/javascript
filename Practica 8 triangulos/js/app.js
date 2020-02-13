let ladoA;
let ladoB;
let ladoC;
let area;
let semiperimetro;
let button = document.getElementById('botoncalcular');
button.addEventListener('click',formuladeheron);

function formuladeheron(){
ladoA = Number (document.getElementById('ladoA').value);
ladoB = Number (document.getElementById('ladoB').value);
ladoC = Number (document.getElementById('ladoC').value);

    semiperimetro = (ladoA + ladoB + ladoC)/2;
    let proceso = semiperimetro * ((semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC))
   area = Math.sqrt(proceso)
   console.log(proceso)

    let imprimirarea = document.getElementById('imprimirarea');

    imprimirarea.innerText = area;
}