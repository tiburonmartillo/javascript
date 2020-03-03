
eventListener();

function eventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click',crearDom);
}

// crearDom();

function crearDom(){
    let numVentas = Number(prompt('ingrese el número de ventas'));
    const output = document.getElementById('output');
    for(let x=1;x<=numVentas;x++){

        const div = document.createElement('div');
        div.classList.add('form-group');

        const label = document.createElement('label');
        label.innerText=`Ingresa la cantidad de la venta: ${x}`;

        const input = document.createElement('input');
        input.setAttribute('type','number');
        input.setAttribute('class','form-control');
        input.setAttribute('id',`inpVenta${x}`);

        const alert = document.createElement('alert');
        alert.setAttribute('class','alert alert-danger')
        div.appendChild(alert);

        output.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);
    }
    const button = document.createElement('button');

    button.innerText = 'Calcular Ingresos';
    button.setAttribute('id','btnCalcularSuma');
    button.setAttribute('class','btn btn-outline-success btn-block');

    output.appendChild(button);

}
    sumarIngresos();

    function sumarIngresos(){
        
        const imprimir = document.createElement('zonaPrint');
        zonaPrint.setAttribute('class','alert alert-danger')
        div.appendChild(zonaPrint);
        
    }
    


// function iniciarApp(){
//     const numVentas = Number(prompt('Ingrese el número de ventas'));

//     const list1000 = document.getElementById('lista1000');
//     const list500 = document.getElementById('lista500');
//     const list400 = document.getElementById('lista-500');

//     let acumulador = 0;
//     for (let i=1; i<=numVentas; i++) {
        
//     const li = document.createElement('li');
//     li.setAttribute('class','list-group-item');

//         let ingreso = Number (prompt(`Monto de la venta ${i}`));

//         acumulador += ingreso;

//         if(ingreso>1000){
            
//             li.innerHTML=`Venta ${i} es de $${ingreso}`;
//             list1000.appendChild(li);
            
//         } else if(ingreso>500 && ingreso<=1000){
    
//             li.innerHTML=`Venta ${i} es de $${ingreso}`;
//             list500.appendChild(li);
            
//         } else if(ingreso>0 && ingreso<=500){
//             li.innerHTML=`Venta ${i} es de $${ingreso}`;
//             list400.appendChild(li);
//         } 
//     }
//     let resultado = acumulador;
//     console.log(resultado);

//     const alertprint = document.getElementById('zonaPrint');

//     alertprint.innerHTML = `El total de la venta es de $${resultado}` ;
// }