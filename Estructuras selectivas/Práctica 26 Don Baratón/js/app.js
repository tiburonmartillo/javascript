const button = document.getElementById('btncalcular');

button.addEventListener('click',descuento);

function descuento(){
    let precio = Number (document.getElementById('precio').value);
    resultado = precio * .84;
    resultado2 = precio * .93;
    
    if(precio>3600){

        let imprimmir = document.getElementById('calcular');
        imprimmir.innerHTML = `El precio del traje con el 16% de descuento es de $${resultado}`;
    } else {
        let imprimmir = document.getElementById('calcular');
        imprimmir.innerHTML = `El precio del traje con el 16% de descuento es de $${resultado2}`;

    }

}