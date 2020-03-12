let contadorInput = 0;
let arregloPromedio = [];

eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', AddEvents);// cuando termina de cargar la página se carga el evento
}
function AddEvents() {
    document.getElementById('AddInputs').addEventListener('click', AddInput);
    document.getElementById('CalcularPromedio').addEventListener('click', CalcularPromedio);
}

function AddInput() {
    const output = document.getElementById('output');
    const divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    const divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = `Ingrese la calificación ${contadorInput + 1}:`;


    const inputFC = document.createElement('input');
    inputFC.setAttribute('class', 'form-control');
    inputFC.setAttribute('type', 'number');
    inputFC.setAttribute('placdeholder', 'Ingrese el valor');
    inputFC.setAttribute('id', `inputPromedio${contadorInput}`);

    contadorInput++;

    output.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(label);
    divFG.appendChild(inputFC);

}

function CalcularPromedio() {
    llenarArray();
    let acumulador = 0;
    for (let i = 0; i < contadorInput; i++) {
        acumulador += arregloPromedio[i];
    }
    acumulador /= contadorInput;
    console.log(acumulador);

    let imprimir=document.getElementById('zonaPrint');
    imprimir.setAttribute('class','alert alert-warning text-center col-12 mt-3')
    imprimir.innerHTML=`El promedio es de ${acumulador}`;

}
function llenarArray() {
    for (let x = 0; x < contadorInput; x++) {
        const valor = document.getElementById(`inputPromedio${x}`).value;

        if (!isNaN(valor)) {
            arregloPromedio[x] = Number(valor);
        } else {
            arregloPromedio[x] = 0;
        }
    }

}
