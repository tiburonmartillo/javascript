const button = document.getElementById('btnComparar');

button.addEventListener('click',comparar);

function comparar(){
    let numero = Number (document.getElementById('numero').value);
    let imprimir = document.getElementById('imprimir');
    if(numero > 99 && numero < 1000 ){
        unidades = numero % 10;
        centenas = numero/100;
    
    if(unidades == Math.trunc(centenas)){
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