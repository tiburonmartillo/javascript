class Carrito {
    AgregarCursoCarrito(informacioncurso,tablaCarrito) {

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
}