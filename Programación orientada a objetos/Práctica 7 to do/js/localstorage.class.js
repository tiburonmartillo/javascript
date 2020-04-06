class TareasLocal{

    static ArrayTareas=[];

    static AgregarTareaLocalS(contenidoTarea){

        this.ArrayTareas=this.ObtenerLocalStorage();
        
        this.ArrayTareas.push(contenidoTarea);

        localStorage.setItem("Tareas",JSON.stringify(this.ArrayTareas));
    }

    static ObtenerLocalStorage(){
        let tareasObtenidasLS=[];

        if(localStorage.getItem("Tareas")===null){
            return tareasObtenidasLS;
        }return JSON.parse(localStorage.getItem("Tareas"));
    }
static EliminarTareaLocalStorage(contenido){
    let tareasLS=this.ObtenerLocalStorage();
    let arrayNuevoTareasLS=[];

    for(let i=0;i<tareasLS.length;i++){
        if(contenido!==tareasLS[i]){
            arrayNuevoTareasLS.push(tareasLS[i])
        }
    }

    localStorage.setItem('Tareas',JSON.stringify(arrayNuevoTareasLS));
}
}