EventListener();

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click',IniciarAplicación);

}

function IniciarAplicación(){
    let numeroalumnos = Number (prompt('¿Cuántos alumnos son?'));

    let acumulador = 0;
    for (let i=1; i<=numeroalumnos; i++) {

        let edad = Number (prompt(`Ingrese la edad del alumno ${i}`));
        // acumulador = acumulador + edad;
        acumulador += edad;
    }
    let resultado = acumulador / numeroalumnos;
    console.log(resultado);

    const alertprint = document.getElementById('ZonePrint');

    alertprint.innerText = resultado;
}


