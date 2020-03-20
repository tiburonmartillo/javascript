eventListener();
let acumuladorPalabras=0;

function eventListener(){
    document.getElementById('palabras').addEventListener('keypress',palabra);
}
function palabra(event) {
    if (event.key == "Enter") { 
        
        
        if (!isNaN(event.target.value)){
            return;
        }else{
            acumuladorPalabras++
        }
        
        RellenarArreglo(event.target.value);
    }
    
}
let arrayPalabra = [];
function RellenarArreglo(palabras) {

        
        if(palabras[0]==`a` || palabras[0] == `e` || palabras[0]==`i` || palabras[0]==`o` || palabras[0]==`u`){
            arrayPalabra[acumuladorPalabras]= palabras;
            
        }else{return;}
        const imprimirPalabra=document.getElementById('zonaPrint');
        imprimirPalabra.setAttribute('class','list-group')
        const palabraImpresa=document.createElement('li');
        palabraImpresa.setAttribute('class','list-group-item')
       palabraImpresa.innerText=arrayPalabra[acumuladorPalabras];

       imprimirPalabra.appendChild(palabraImpresa);
 
       
    }

