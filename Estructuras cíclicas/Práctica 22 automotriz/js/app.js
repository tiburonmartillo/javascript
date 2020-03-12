eventListener();

function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', iniciarApp);
}

let acumulador1 = 0;
let acumulador2 = 0;
let acumulador3 = 0;

let resultado1 = 0;
let resultado2 = 0;
let resultado3 = 0;
const listGroup = document.getElementById('lista');

function iniciarApp() {

    let automoviles = Number(prompt('Número de vehiculos'));
    for (let i = 1; i <= automoviles; i++) {
        let claves = Number(prompt(`Ingrese la clave del automovil ${i}`));
        let precio = Number(prompt(`Ingrese el valor del automovil ${i}`));
        const li = document.createElement('li');
        if (claves == 1) {
            acumulador1 += 1
            resultado1 = precio * 1.1;
            let acumuladorresultado1=0;
            acumuladorresultado1+=resultado1;
            li.setAttribute('class', 'list-group-item-info');
            li.innerText = `El automovil ${i} paga $${resultado1} con un impuesto de 10%`;
            listGroup.appendChild(li);
            console.log(acumuladorresultado1);
            
        } else if (claves == 2) {
            acumulador2 += 1
            resultado2 = precio * 1.07;
            console.log(resultado2);
            li.setAttribute('class', 'list-group-item-danger');
            li.innerText = resultado2;
            listGroup.appendChild(li);
        } else if (claves == 3) {
            acumulador3 += 1
            resultado3 = precio * 1.05;
            console.log(resultado3);
            li.setAttribute('class', 'list-group-item-warning');
            li.innerText = resultado3;
            listGroup.appendChild(li);
        }

    }
    console.log(acumulador1);
    console.log(acumulador2);
    console.log(acumulador3);
    console.log(resultado1 + resultado2 + resultado3);

}