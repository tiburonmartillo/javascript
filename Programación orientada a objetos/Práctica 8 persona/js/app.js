eventListener();

function eventListener(){
    document.querySelector('img').addEventListener('mouseover',imprimir);
}

function imprimir(event){


   let zonaprint=document.getElementById('zonaPrint')


   zonaprint.innerText='pantalon'
  
   
}