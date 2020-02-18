const button = document.getElementById('btncalcular');

button.addEventListener('click',calcular);

function calcular(){
    let articulo = String(document.getElementById('articulo').value);
    let clave = String(document.getElementById('clave').value);
    let precio = Number(document.getElementById('precio').value);
    let preciocondescuento1 = precio * .9
    let preciocondescuento2 = precio * .8
    
    if(clave == 01){
        let imprimir = document.getElementById('imprimir');
        //template literals
        imprimir.innerText=` El articulo ${articulo} con clave 0${clave} su precio es de ${precio} y con descuento es de ${preciocondescuento1}`;
    } else {
        imprimir.innerText=` El articulo ${articulo} con clave 0${clave} su precio es de ${precio} y con descuento es de ${preciocondescuento2}`;
    }


}