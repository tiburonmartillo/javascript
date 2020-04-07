class LocalStorageManipular {

    static AgregarCarritoLocalStorage(informacioncurso) {// método estático

        const cursosLS = this.ObtenerCursoLocalStorage();

        cursosLS.push(informacioncurso);

        localStorage.setItem("cursos", JSON.stringify(cursosLS));//json stringifly convierte todo a string
    }

    static ObtenerCursoLocalStorage() {
        
        if (localStorage.getItem("cursos") == null) return[];

        return JSON.parse(localStorage.getItem("cursos"));//convierte los string en el elemento que es
    }

    static eliminarCursoStorage(idCurso){
       
        let cursosLs=this.ObtenerCursoLocalStorage();
        let nuevosCursosLS=[];

        for(let i =0;i<cursosLs.length;i++){
            if(cursosLs[i].id!=idCurso){
                nuevosCursosLS.push(cursosLs[i]);
            }
        }

        console.log(cursosLs);
        console.log(nuevosCursosLS);
        
        
        localStorage.setItem('cursos',JSON.stringify(nuevosCursosLS));

    }

    static vaciarCarritoLS(){
        localStorage.clear();
    }
}