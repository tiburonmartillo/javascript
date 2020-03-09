eventListener();
function eventListener(){
    const button=document.getElementById('initApp');
    button.addEventListener('click',iniciarApp);

}
let acumuladorVentas=0;
let acumuladorciudades=0;
let acumuladorSucursales=0;
let acumuladorempleados=0;
function iniciarApp(){
    let ciudades= Number(prompt('Ingrese número de ciudades'));
    acumuladorciudades+=ciudades;

    for(let i=1;i<=ciudades;i++){
        let sucursales= Number(prompt(`ingrese elnúmero de sucursales en la ciudad ${i}`));
        acumuladorSucursales+=sucursales;
        for(let e=1;e<=sucursales;e++){
            let empleados=Number(prompt(`ingrese el número de empleados de la tienda ${e}`));
            acumuladorempleados+=empleados;
            for(let v=1;v<=empleados;v++){
                let ventas=Number(prompt(`Ingrese la venta del empleado ${v}`));
                console.log(`las ventas del empleado ${v} en la sucursal ${e} en la ciudad ${i} son de ${ventas} `);
                
                acumuladorVentas+=ventas;
                console.log(ventas);
            }
            
        }
    }
    console.log(acumuladorciudades);
    console.log(acumuladorSucursales);
    console.log(acumuladorempleados);
    
    console.log(acumuladorVentas);//venta total de la cadena
        
    }
