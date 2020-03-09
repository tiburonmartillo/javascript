eventListener();
function eventListener(){
    const button=document.getElementById('initApp');
    button.addEventListener('click',iniciarApp);

}
let acumuladorVentas=0;
let acumuladorCiudades=0;
let acumuladorSucursales=0;
let acumuladorEmpleados=0;

function iniciarApp(){
    let ciudades= Number(prompt('Ingrese número de ciudades'));
    const listaCiudades=document.getElementById('listaCiudades');
    const listaSucursales=document.getElementById('listaSucursales');
    const listaEmpleados=document.getElementById('listaEmpleados');
    for(let i=1;i<=ciudades;i++){
        let sucursales= Number(prompt(`Ingrese el número de sucursales en la ciudad ${i}`));
        acumuladorCiudades+=ciudades
        
        for(let e=1;e<=sucursales;e++){
            let empleados=Number(prompt(`ingrese el número de empleados de la tienda ${e}`));
            acumuladorSucursales+=sucursales
            
            for(let v=1;v<=empleados;v++){
                let ventas=Number(prompt(`Ingrese la venta del empleado ${v}`));
                acumuladorVentas+=ventas;
                acumuladorEmpleados+=empleados
                
                const li = document.createElement('li');
                    li.setAttribute('class', 'list-group-item list-group-item-danger','col');
                    li.innerText = `La venta del vendedor ${acumuladorEmpleados/empleados} de la sucursal ${acumuladorSucursales/sucursales} de la ciudad ${acumuladorCiudades/ciudades} fueron de ${ventas}`;
                    listaEmpleados.appendChild(li);

                    console.log(ciudades,sucursales,empleados,ventas);
                    
                }
                
                
                const li = document.createElement('li');
                li.setAttribute('class', 'list-group-item list-group-item-info','col');
                li.innerText = `La venta de la ciudad ${acumuladorCiudades/sucursales} es de ${acumuladorVentas/empleados}`;
                listaCiudades.appendChild(li);
            }
            const li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-warning','col');
            li.innerText = `La venta de la sucursal ${acumuladorSucursales/2} de la ciudad ${acumuladorCiudades/2} es de ${acumuladorVentas}`;
            listaSucursales.appendChild(li);
            
        
    }
    
    
}

