
EventListener();

function EventListener(){
    const button = document.getElementById('btnInit');

    button.addEventListener('click',InitApp);

}

function InitApp(){
    let continuar = true;
    let acumulador = 0;
    let contador = 0;

    while(continuar==true){
        let estatura = Number(prompt('ingrese la estatura'));

        if(estatura==0){
            continuar = false;
        }

        acumulador += estatura;
        contador++
    }
    let resultado = acumulador / (contador-1);

    console.log(resultado);

    let imprimir = document.getElementById('zonaprint');

    imprimir.innerText = resultado;
}