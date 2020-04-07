class Carrito {
    AgregarCursoCarrito(informacioncurso,tablaCarrito,origen) {

        if(LocalStorageManipular.verificarCursoRepetido(informacioncurso.id))return;

        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <td>
        <img src="${informacioncurso.imagen}" width="100%"/>
        </td>
        <td>${informacioncurso.titulo}</td>
        <td>${informacioncurso.precio}</td>
        <td>
        <a class="borrar-curso" data-id="${informacioncurso.id}">X</a>
        </td>
        `;
    tablaCarrito.appendChild(tableRow);

    if(origen)LocalStorageManipular.AgregarCarritoLocalStorage(informacioncurso)
    }

    static eliminarCursoCarrito(nodeDom){
        const idCurso=nodeDom.querySelector('.borrar-curso').getAttribute('data-id');
        
        LocalStorageManipular.eliminarCursoStorage(idCurso);

        nodeDom.remove();
       
    }

    static vaciarCarrito(tablaCursos){
        while(tablaCursos.firstChild){
            tablaCursos.firstChild.remove();
        }

        LocalStorageManipular.vaciarCarritoLS();
    }

}