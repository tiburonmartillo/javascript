const button = document.getElementById('btnPromedio');

button.addEventListener('click',ObtenerPromedio);

function ObtenerPromedio(){
    const calif1 = Number (document.getElementById('calif1').value);
    const calif2 = Number (document.getElementById('calif2').value);
    const calif3 = Number (document.getElementById('calif3').value);

    let resultado = (calif1 + calif2 + calif3) / 3;

    const imprimir = document.getElementById('imprimirEstatus');

    if(resultado>=9){
        let  divImprimir = `<div class="alert alert-success mt-3 text-center"> <p>El alumno ha aprobado</p> </div>`;

        imprimir.innerHTML= divImprimir;
        
    } else if(resultado>=6 && resultado<9){
        let  divImprimir = `<div class="alert alert-warning mt-3 text-center"> <p>El alumno es regular</p> </div>`;

        imprimir.innerHTML= divImprimir;

   } else if(resultado<6) {
    let  divImprimir = `<div class="alert alert-danger mt-3 text-center"> <p>El alumno ha reprobado</p> </div>`;

    imprimir.innerHTML= divImprimir;

    }
}