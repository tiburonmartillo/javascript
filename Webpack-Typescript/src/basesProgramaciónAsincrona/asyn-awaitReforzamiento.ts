import { Alumnos, Carrera, CentroEstudios } from "./../temas Base/interface";

const alumno: Array<Alumnos> = [
  {
    id: 1,
    Nombre: "Alicia Villareal",
    idCarrera: 3,
  },
  {
    id: 2,
    Nombre: "Blanca Diaz",
    idCarrera: 4,
  },
  {
    id: 3,
    Nombre: "Daniel Palacios",
    idCarrera: 3,
  },
  {
    id: 4,
    Nombre: "Victor Lemus",
    idCarrera: 1,
  },
  {
    id: 5,
    Nombre: "Karen Sanchez",
    idCarrera: 5,
  },
];

const carrera: Array<Carrera> = [
  {
    idCarrera: 1,
    carrera: "Mercadotecnia",
    idCentroEstudios: 1,
  },
  {
    idCarrera: 2,
    carrera: "Historia",
    idCentroEstudios: 3,
  },
  {
    idCarrera: 3,
    carrera: "Nutricion",
    idCentroEstudios: 2,
  },
  {
    idCarrera: 4,
    carrera: "TICS",
    idCentroEstudios: 1,
  },
];
const centroestudios: Array<CentroEstudios> = [
  {
    id: 1,
    Nombre: "Ciencia y tecnologias",
  },
  {
    id: 2,
    Nombre: "Salud",
  },
];




const obteneridCarrera=async(id1:number)=>{
   
        const obteneralumno=alumno.find((alumno)=>alumno.id==id1);

      if(!alumno){
          throw new Error(`No se ha encontrado al alumno con id: ${id1}`);}
        else{
            return (obteneralumno?.idCarrera);
        };
};

const obtenerNombreCarrera=async(id2:number)=>{
    
        const obntenerIDcarrera=carrera.find((carrera)=>carrera.idCarrera==id2);

        if(!carrera){
            throw new Error(`La carrera no existe`)}
        else{
            return (obntenerIDcarrera?.carrera)
        };
};


const obteneridCentro=async(nombre:string)=>{
        const idCentro=carrera.find((carrera)=>carrera.carrera==nombre);

        if(nombre){return (idCentro?.idCentroEstudios)
        }else{
            throw new Error (`No se encuentra la carrera ${nombre}`)
        }
    
};


const obtenernombreCentro=async (idCentro:number)=>{
        const nombreCentro=centroestudios.find((centroestudios)=>centroestudios.id==idCentro)
        if(idCentro){
            return (nombreCentro?.Nombre)
        }else{throw new Error(`no existe ese centro`)};
};

const obtenerNombreAlumno= async(nombre:string)=>{
        const nombreAlumno=alumno.find((alumno)=>alumno.Nombre==nombre)

        if(nombre){
            return(nombreAlumno?.idCarrera)
        }else{throw new Error(`no existe el alumno ${nombre}`)}
};



/********ejercicio 2+*********

********+*********/
const getInformacionidCarrera=async(id:number)=>{
    const idAlumnoObtenido=await obteneridCarrera(id);
   const nombreCarreraObtenido=await obtenerNombreCarrera(idAlumnoObtenido);
   const idcentroObtenido=await obteneridCentro('Nutricion');
   const nombreCentroObtenido=await obtenernombreCentro(idcentroObtenido);
   const nombreAlumnoObtenido=await obtenerNombreAlumno('Victor Lemus');
   console.log(idAlumnoObtenido,nombreCarreraObtenido,idcentroObtenido,nombreCentroObtenido,nombreAlumnoObtenido);
   return `El alumno con id: ${id}, pertenece a la carrera ${nombreCarreraObtenido}
    La carrera ${nombreCarreraObtenido} pertenece a centro ${nombreAlumnoObtenido} 
    La carrera del alumno Victor Lemus pertenece a al centro ${nombreCentroObtenido}`

    
    
}

getInformacionidCarrera(2)
.then((mensaje: string) => console.info(mensaje))
.catch((err: Error) => console.log(err.message));


