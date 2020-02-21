const button = document.getElementById('btncotizar');

button.addEventListener('click',sumar);

function sumar(){
    let destino = Number (document.getElementById('destino').value);
    const imprimirtotal = document.getElementById('imprimirtotal'); 
    
    if(destino == 1){
        imprimirtotal.innerHTML = `Costo del pasaje a México ida y vuelta es de $${(750*2)*2}`;
    } else if (destino == 2){
        imprimirtotal.innerHTML = `Costo del pasaje a Puerto Vallarta ida y vuelta es de $${(800*2)*2}`;  
    } else if(destino == 3){
        imprimirtotal.innerHTML = `Costo del pasaje a Acapulco ida y vuelta es de $${(1200*2)*2}`;
    } else if (destino == 4){
        imprimirtotal.innerHTML = `Costo del pasaje a Cancún ida y vuelta es de $${(1800*2)*2}`;
    } else if (destino == 5){
        imprimirtotal.innerHTML = `No salir de casa te sale más barato`;
    }
}