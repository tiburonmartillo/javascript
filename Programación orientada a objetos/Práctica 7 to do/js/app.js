
const contenidoTarea = document.getElementById('txtTarea');
const listaTareas = document.getElementById('listaTareas');

eventListener();
cargardom();

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
    
    // TareasLocal.AgregarTareaLocalS();

  
}

function eliminarTarea(event) {
    Tareas.eliminarTareaDOM(event);

 
}

function cargardom(event){
    const TareasLS = TareasLocal.ObtenerLocalStorage();

    for (let i = 0; i < TareasLS.length; i++) {
        const instanciaTarea = new Tareas(TareasLS[i]);
        instanciaTara.agregarTareaDOM(listaTareas, false);
    }

}