class Tareas {
    contenido = "";
    TareasLocal;

   

    constructor(contenido) {
        this.contenido = contenido;


    }

    agregarTareaDOM(contenedor, origen) {
        
        const li = document.createElement("li");
        li.classList = "list-group-item text-break";
        li.textContent = this.contenido;

        const btnEliminar = document.createElement('button');
        btnEliminar.classList = "close";

        const span = document.createElement('span');
        span.classList = "badge badge-pill text-primary"
        span.innerHTML = ` <i class="fa fa-check" aria-label="Close"></i>`;

        
        contenedor.appendChild(li);
        li.appendChild(btnEliminar);
        btnEliminar.appendChild(span);

        if (origen) TareasLocal.AgregarTareaLocalS(this.contenido);
      
        
    }

    static eliminarTareaDOM(event) { 
        if (event.target.tagName != 'SPAN') return;

        const liBorrado = event.target.parentElement.parentElement;
        let textoLiBorrado = liBorrado.textContent;
        textoLiBorrado= textoLiBorrado.substring(0, textoLiBorrado.length - 1)
        
        
        liBorrado.remove();
        
        // console.log(textoLiBorrado);

        const tareasCompletas=document.getElementById('listaTareasTerminadas');

        const li = document.createElement("li");
        li.classList = "list-group-item text-danger text-break mb-1";
        li.innerHTML = `<del>${textoLiBorrado}</del>` ;

        tareasCompletas.appendChild(li);

        // console.log('funciona');
        
        TareasLocal.EliminarTareaLocalStorage(textoLiBorrado);
    }

   
}