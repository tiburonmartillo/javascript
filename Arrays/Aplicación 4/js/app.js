EventListener();

function EventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', CrearInputs);
}
function CrearInputs(event) { // event es un parametro enviado por el addeventlistener de crearInputs
    if (event.key == "Enter") {  //debe estar escrito igual que el key

        /** si isn¡NaN es igual a true quiere decir que no es un número. Si isNaN es igual a falso quiere decir que es número */
        if (isNaN(event.target.value)) return; // return se sale de la función
        console.log("works");

        RellenarArreglo(event.target.value);
    }

    //console.log(event.key); solo nos muestra la propiedad de la tecla pulsada
}

let arregloNumeroAleatorio = [];
function RellenarArreglo(tamanoArray) { //parametros posicionales

    for (let i = 0; i < tamanoArray; i++) {
        arregloNumeroAleatorio[i] = Math.floor(Math.random() * (10 - 1) + 1);
    }
mostrarValores(arregloNumeroAleatorio);

}

function mostrarValores(arregloLleno){

    
    for(let i=0;i<arregloLleno.length;i++){
        
        const listGroup = document.getElementById('zonaPrint');
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `${i}`;
        listGroup.appendChild(li);
        
    }
    
    
    
}