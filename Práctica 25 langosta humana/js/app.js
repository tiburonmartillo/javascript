const button = document.getElementById('btncotizar');

button.addEventListener('click',cotizar);


function cotizar(){
    const personas = Number(document.getElementById('personas').value);
    const imprimircot = document.getElementById('ImprimirCotizacion');
    let costomenosde200 = personas * 95;
    let costomenosde300 = personas * 85;
    let costomasde300 = personas * 75;
    if(personas<200){
        
        let imprimircotizacion = `<div class="alert alert-danger mt-3 text-center"> <p>Para ${personas} personas el precio por persona es de $95 y el total es de $${costomenosde200}</p> </div>`

        imprimircot.innerHTML = imprimircotizacion;
    } else if(personas>=200 && personas<300){

        let imprimircotizacion = `<div class="alert alert-danger mt-3 text-center"> <p>Para ${personas} personas el precio por persona es de $85 y el total es de $${costomenosde300}</p> </div>`

        imprimircot.innerHTML = imprimircotizacion;
    }
     else if(personas>300){

        let imprimircotizacion = `<div class="alert alert-danger mt-3 text-center"> <p>Para ${personas} personas el precio por persona es de $75 y el total es de $${costomasde300}</p> </div>`

        imprimircot.innerHTML = imprimircotizacion;
    }
}