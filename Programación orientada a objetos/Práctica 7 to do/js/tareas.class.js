class Tareas {
    contenido = "";
    ManipularLocalStorage;

    constructor(contenido) {
        this.contenido = contenido;


    }

    agregarTareaDOM(contenedor, origen) {
        const li = document.createElement("li");
        li.classList = "list-group-item text-break";//reemplaza la classList del elemento por la que definamos
        li.textContent = this.contenido;

        const btnEliminar = document.createElement('button');
        btnEliminar.classList = "close";

        const span = document.createElement('span');
        span.classList = "badge badge-pill text-primary"
        span.innerHTML = ` <i class="fa fa-check" aria-hidden="true"></i>`;

  

        contenedor.appendChild(li);
        li.appendChild(btnEliminar);
        btnEliminar.appendChild(span);



    }

}