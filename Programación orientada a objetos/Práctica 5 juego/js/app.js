const imagen = document.getElementById('Carro');
let sizeMarginleft = 0;

const carro = new Carro(0, 0);

let posicionImagenes = [];
let puntos=0;

let Contenedor = document.getElementById('contenedor');
evenListener();

function evenListener() {
    obtenerMargin();
    document.addEventListener('keydown', moverCarro);
    document.addEventListener('click', ponerPremio);
    window.addEventListener('resize', obtenerMargin)
}

function moverCarro(event) {

    carro.moverCarro(event.key, imagen, posicionImagenes);
   
    const response = carro.verificarColision(posicionImagenes);

    if(response!=null){
        Premios.eliminarPremio(Contenedor,posicionImagenes[response].id);
        posicionImagenes.splice(response,1);

        puntos++
        let zonaPrint=document.getElementById('puntos');
        zonaPrint.innerText=puntos;
       
    }
}

function ponerPremio(event) {


    const premio = new Premios(event.x, event.y);


    posicionImagenes.push(premio.crearImagen(Contenedor, sizeMarginleft));




}

function obtenerMargin() {
    const marginContainer = window.getComputedStyle(Contenedor).getPropertyValue('margin-left');

    sizeMarginLeft = marginContainer.substring(0, marginContainer.length - 2);




}

