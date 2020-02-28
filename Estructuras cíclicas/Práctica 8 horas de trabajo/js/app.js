eventListener();

function eventListener(){
    const button = document.getElementById('btnInit');
    
    button.addEventListener('click',iniciarApp);
}

function iniciarApp(){
    let pagoPorHora = Number (prompt('Ingrese el pago por hora trabajada'));
    let acumulador =0;
    let resultado=0;
    for (let i=1; i<=6; i++) {

        let horas = Number (prompt(`Ingrese las horas trabajadas el día ${i}`));
        // acumulador = acumulador + edad;
        acumulador += horas;
        resultado = pagoPorHora * acumulador;
        
        const alertprint = document.getElementById('zonaPrint');
        
        alertprint.innerHTML = `<div class="alert alert-warning text-center mt-3">Las horas trabajadas fueron ${horas} y el pago por hora es de ${pagoPorHora} por lo que el sueldo que se le pagará es de ${resultado}</div>`;
    }
    console.log(resultado);

}