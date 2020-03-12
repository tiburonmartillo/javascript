eventListener();

function eventListener() {
    document.getElementById('mostrarInputs').addEventListener('click', mostrarInputs);
}
function mostrarInputs() {
    const numeroInputs = Number(document.getElementById('numeroInputs').value);

    if (numeroInputs > 0) {
        const output = document.getElementById('output');
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
    }
}