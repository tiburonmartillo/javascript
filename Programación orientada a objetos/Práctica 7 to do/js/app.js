
const contenidoTarea = document.getElementById('txtTarea');
const listaTareas = document.getElementById('listaTareas');


eventListener();

function eventListener() {
    document.querySelector('#formulario').addEventListener('submit', agreagarTarea);
    listaTareas.addEventListener('click', eliminarTarea);

}

function agreagarTarea(event) {
    
    event.preventDefault();
    
    if (contenidoTarea.value == "") return
    const instanciaTarea = new Tareas(contenidoTarea.value)
    instanciaTarea.agregarTareaDOM(listaTareas, true)

    contenidoTarea.value = "";
}

function eliminarTarea(event) {
    Tareas.eliminarTareaDOM(event);

}