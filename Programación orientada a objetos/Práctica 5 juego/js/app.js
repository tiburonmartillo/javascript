const imagen=document.getElementById('Carro');

const carro=new Carro(0,0);

evenListener();

function evenListener(){
    document.addEventListener('keydown',moverCarro)
}

function moverCarro(event){
console.log(event);

carro.moverCarro(event.key, imagen);
}