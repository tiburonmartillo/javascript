const button = document.getElementById('btnComparar');

button.addEventListener('click',comparar);

function comparar(){
    let numero = Number (document.getElementById('4digitos').value);
    const imprimir = document.getElementById('imprimir');

    if(numero > 999 && numero < 10000 ){
        unidades = numero % 10;
        decenas = (numero % 100) / 10;
        centenas = (numero/100) % 10;
        millar = numero/1000;
    console.log(unidades);
    console.log(decenas);
    console.log(centenas);
    console.log(millar);
    if(unidades == Math.trunc(millar) && Math.trunc(decenas) == Math.trunc(centenas)){
        comparacion = `Sí es`;
    }

    else{
        comparacion = `No es`;
    }
 
        }else{
            comparacion = `Ingrese otro numero`;
        }
        imprimir.innerHTML = `<div class="alert alert-success text-center mt-3">${comparacion}</div>`;
}