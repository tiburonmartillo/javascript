const output = document.getElementById('output');
eventListener();

function eventListener() {
    document.getElementById('mostrarInputs').addEventListener('click', mostrarInputs);
}


function mostrarInputs() {
    const numeroInputs = Number(document.getElementById('numeroInputs').value);

    if (numeroInputs > 1000 || numeroInputs <= 0) return;

    eliminarElementos();
    const row = document.createElement('div');

    row.setAttribute('class', 'row');

    for (let i = 0; i < numeroInputs; i++) {
        const divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        const divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        const label = document.createElement('label');
        label.innerText = `ingrese el numero a guardar en el arreglo`;

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', `valorInput${i}`);
        input.setAttribute('class', 'form-control');

        row.appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(label);
        divFG.appendChild(input);
    }
    output.appendChild(row);

    const buttonObtenerResultado = document.createElement("button");
    buttonObtenerResultado.setAttribute('class', 'btn btn-outline-success btn-block');
    buttonObtenerResultado.setAttribute('id', 'btnCalcularResultado');
    buttonObtenerResultado.innerText = "Obtener resultado";

    row.appendChild(buttonObtenerResultado);

    document.getElementById('btnCalcularResultado').addEventListener('click', RealizarComparación);
}

let arreglo1 = [];

function RealizarComparación() {

    const numeroInputs = document.getElementsByTagName('input');//tagname es para llamar todos los elementos que cumplan con ser input


    let acumulador = 0;
    for (let x = 0; x < numeroInputs.length; x++)//length es la longitud del index
    {

        for(let y=x+1;y<numeroInputs.length;y++){
            if(numeroInputs[x].value==numeroInputs[y].value){
                numeroInputs[y].value="-";
            }
        }

        acumulador += Number(numeroInputs[x].value);
        console.log(numeroInputs[x].value);
    }




}

function eliminarElementos() {

    while (output.firstchild) {
        
        output.firstChild.remove();
    }


}
