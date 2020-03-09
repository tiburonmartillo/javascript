eventListener();
function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', iniciarApp);
}
function iniciarApp() {
    let ingreso = Number(prompt('Ingrese el salario'));
    let porcentaje = Number(prompt('Ingrese el porcentaje de incremento anual'));
    let meses = Number(prompt('Ingrese el número de meses a mostrar'));

    for (let i = 1; i <= meses; i++) {
        const lista = document.getElementById('listaIngresos');

        let incremento =ingreso*(porcentaje*.01);
         

        ingreso+=incremento;

    
        // incremento+=ingreso;
        console.log("el ingreso es de",ingreso);
        console.log("el incremento es de",incremento);
        
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item list-group-item-danger', 'col');
        li.innerText = `El salario del año ${i} es de ${ingreso}`;
        lista.appendChild(li);
    }
}