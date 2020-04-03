class Tweets {
    contenido = "";
    ManipularLocalStorage;

    constructor(contenido) {
        this.contenido = contenido;


    }

    agregarTweetDOM(contenedor, origen) {
        const li = document.createElement("li");
        li.classList = "list-group-item text-break";//reemplaza la classList del elemento por la que definamos
        li.textContent = this.contenido;

        const btnEliminar = document.createElement('button');
        btnEliminar.classList = "close";

        const span = document.createElement('span');
        span.classList = "badge badge-pill text-danger"
        span.innerText = 'X';

        contenedor.appendChild(li);
        li.appendChild(btnEliminar);
        btnEliminar.appendChild(span);

        if (origen) ManipularLocalStorage.AgregarTweetLocalStorage(this.contenido);


    }

    static eliminarTweetDOM(event) { // los elementos static no pueden utilizar a los elementos de instancia 
        if (event.target.tagName != 'SPAN') return;

        const liBorrado = event.target.parentElement.parentElement;
        let textoLiBorrado = liBorrado.textContent;
        textoLiBorrado= textoLiBorrado.substring(0, textoLiBorrado.length - 1)

        ManipularLocalStorage.EliminarTweetLocalStorage(textoLiBorrado);

        liBorrado.remove();

        console.log(textoLiBorrado);

    }
}