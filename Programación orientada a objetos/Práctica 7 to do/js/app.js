
const contenidoTarea=document.getElementById('txtTarea');
const listaTareas=document.getElementById('listaTareas');
let ArrayTareas=[];

eventListener();

function eventListener(){
    
    document.querySelector('#formulario').addEventListener('submit',agreagarTarea);
    
}

function agreagarTarea(){
    event.preventDefault();
    const instanciaTarea= new Tareas(contenidoTarea.value)
instanciaTarea.agregarTareaDOM(listaTareas,true)

    console.log(instanciaTarea);
    
    
    
   
    

}