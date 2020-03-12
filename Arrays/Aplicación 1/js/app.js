let arreglo = [];
const output = document.getElementById('output');

eventListener();
function eventListener() {
    document.getElementById('btnAceptar').addEventListener('click', obtenerResultado);
    document.addEventListener('DOMContentLoaded', CargarInputs); // ejecuta una función llamada cargar Inputs
    document.getElementById('btnReiniciar').addEventListener('click',reiniciarApp);
}

function reiniciarApp(){
    window.location.reload();
}

function CargarInputs() {

    for (let x = 0; x < 10; x++) {

        const divFG = document.createElement('div');// crea un elemento div
        divFG.setAttribute('class', 'form-group');// con clase form group

        const labelFG = document.createElement('label');
        labelFG.innerText = `Dame el valor de la posición ${x + 1}`;

        const inputFC = document.createElement('input');
        inputFC.setAttribute('type', 'number');
        inputFC.setAttribute('placeholder', 'Ingresa el valor');
        inputFC.setAttribute('class', 'form-control');
        inputFC.setAttribute('id', `inputValor${x}`);


        output.appendChild(divFG);// inserta el divFG en el output
        divFG.appendChild(labelFG);//inserta el labelFG en el divFG
        divFG.appendChild(inputFC);// inserta el inputFC en el divFG
    }
}

function obtenerResultado() {
    for (let x = 0; x < 10; x++) {
        const valor = document.getElementById(`inputValor${x}`).value;
        if (valor != "") { // para validar

            arreglo[x] = valor;
        } else {
            arreglo[x] = `<span class="text-danger">No se ingresó numero</<span>`;
        }
    }
    MostrarValores();
}
function MostrarValores() {
    eliminarDOM();
    const mostrarValoresUL = document.getElementById('mostratArreglo');
    for (let x = 0; x < arreglo.length; x++) {//arreglo.length es la longitud del arreglo que en este caso es 10
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerHTML = `<p>Index:${x}</p> <p>Valor=${arreglo[x]}</p>`;
        mostrarValoresUL.appendChild(li);// se inserta el li en mostrarValoresUL
    }
}
function eliminarDOM() {

    while (output.firstChild)//mientras output tenga un primer hijo 
    {
        output.firstChild.remove();

    }
}