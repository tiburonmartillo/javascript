const button = document.getElementById('btndescuento');

button.addEventListener('click',descuento);

function descuento(){
    let compras = Number(document.getElementById('compras').value);

    
    
    if(compras > 1000){
        let imprimirtotal = document.getElementById('imprimirtotal');


        imprimirtotal.innerText = compras * .8;
    } else {
        imprimirtotal.innerText = compras;
    }
}