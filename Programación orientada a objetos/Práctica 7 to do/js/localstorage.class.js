class TareasLocal{

    static ArrayTareas=[];

    static AgregarTareaLocalS(ContenidoTweet){

        this.ArrayTareas=this.ObtenerLocalStorage();
        
        this.ArrayTareas.push(contenidoTarea);

        localStorage.setItem("Tareas",JSON.stringify(this.ArrayTareas)); // localStorage almacena la información
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

    for(let i=0;i<tweetsLS.length;i++){
        if(contenido!==tareasLS[i]){
            arrayNuevoTweetsLS.push(tareasLS[i])
        }
    }

    localStorage.setItem('tweets',JSON.stringify(arrayNuevoTareasLS));
}
}