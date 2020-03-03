
eventListener();

function eventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click',iniciarApp);
}

function iniciarApp(){
    const numVentas = Number(prompt('Ingrese el número de ventas'));
    const list1000 = document.getElementById('lista1000');
    const list500 = document.getElementById('lista500');
    const list400 = document.getElementById('lista-500');

    let acumulador = 0;
    for (let i=1; i<=numVentas; i++) {
        
    const li = document.createElement('li');
    li.setAttribute('class','list-group-item');

        let ingreso = Number (prompt(`Monto de la venta ${i}`));

        acumulador += ingreso;

        if(ingreso>1000){
            
            li.innerHTML=`Venta ${i} es de $${ingreso}`;
            list1000.appendChild(li);
            
        } else if(ingreso>500 && ingreso<=1000){
    
            li.innerHTML=`Venta ${i} es de $${ingreso}`;
            list500.appendChild(li);
            
        } else if(ingreso>0 && ingreso<=500){
            li.innerHTML=`Venta ${i} es de $${ingreso}`;
            list400.appendChild(li);
        } 
    }
    let resultado = acumulador;
    console.log(resultado);

    const alertprint = document.getElementById('zonaPrint');

    alertprint.innerHTML = `El total de la venta es de $${resultado}` ;
}