const tablaCarrito=document.querySelector('#lista-carrito tbody')
eventListener();

function eventListener() {
    document.querySelector('#lista-cursos').addEventListener('click', GuardarCursoCarrito);
    
    iniciarCarrito();
}

function GuardarCursoCarrito(event) {
    event.preventDefault();
    if (event.target.classList.value.search('agregar-carrito') == -1) return;//busca la clase agregar carrito y arroja su posición en la linea de codigo cuando osu valor es 
    const curso = event.target.parentElement.parentElement;// el div en el eque se encuentra
const informacioncurso={
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    
};

 const carrito = new Carrito();

 carrito.AgregarCursoCarrito(informacioncurso,tablaCarrito,true)


}

function iniciarCarrito(){
    const cursosLS=LocalStorageManipular.ObtenerCursoLocalStorage();

    for(let i=0;i<cursosLS.length;i++){
        const carrito=new Carrito();
        carrito.AgregarCursoCarrito(cursosLS[i],tablaCarrito,false)
    }
}