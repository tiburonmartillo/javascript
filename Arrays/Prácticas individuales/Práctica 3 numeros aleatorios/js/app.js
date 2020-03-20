eventListener();
let numA = [];
function eventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', initApp)
}
function initApp(event) {
    if (event.key == "Enter") {
        if (isNaN(event.target.value)) {
            return;
        }
        numA = tamanoArray.value;

    }

    for (let i = 0; i < numA; i++) {
        let numAleatorio = [];
        numAleatorio[i] = Math.floor(Math.random() * (numA - i) + i);
        
        const lista=document.getElementById('lista');
        
        const numerosAleatorios=document.createElement('li');
        numerosAleatorios.setAttribute('class','list-group-item col-6')
        numerosAleatorios.innerText=numAleatorio[i];
        lista.appendChild(numerosAleatorios);
        
        const listaPar=document.getElementById('listaPar');
        
        if (numAleatorio[i]% 2==0) {
            
            
            numerosAleatorios.setAttribute('class','list-group-item col-6 text-danger')
            // listaPar.appendChild(numerosAleatorios);
            
        }
        
        listaPar.appendChild(numerosAleatorios);
    }

}