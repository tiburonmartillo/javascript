import { Alumnos } from "./../temas Base/interface";
import { Carrera } from "./../temas Base/interface";
import { CentroEstudios } from "./../temas Base/interface";

const alumno: Array<Alumnos> = [
    {
        id:1,
        Nombre: "Alicia Villareal",
        idCarrera:3
    },
    {
        id:2,
        Nombre:"Blanca Diaz",
        idCarrera:2
    },
    {
        id:3,
        Nombre:"Daniel Palacios",
        idCarrera:4        
    },
    {
        id:4,
        Nombre:"Victor Lemus",
        idCarrera:1
    },
    {
        id:5,
        Nombre:"Karen Sanchez",
        idCarrera:5
    },
];

const carrera : Array<Carrera> = [
    {
        idCarrera:1,
        carrera: "Mercadotecnia",
        idCentroEstudios:1
    },
    {
        idCarrera:2,
        carrera:"Historia",
        idCentroEstudios:3
    },
    {
        idCarrera:3,
        carrera:"Nutricion",
        idCentroEstudios:2
    },
    {
        idCarrera:4,
        carrera:"TICS",
        idCentroEstudios:1
    },
];

const centroestudios: Array<CentroEstudios> = [
    {   
        id:1,
        Nombre: "Ciencia y tecnologias"
    },
    {
        id:2,
        Nombre:"Salud"
    },
];
/*id*/
let obtenerID = (id:number, callback:Function) => {

    let idAlumnoBD = alumno.find((alumno) => alumno.id === id);

    !idAlumnoBD?
    callback(`No existe el alumno con este ID ${id} en la base de datos`):
    callback(null, idAlumnoBD);
    
    console.log(idAlumnoBD);
};

/*carrera */
let getNombreCarrera = (alumno:Alumnos, callback:Function) => {

    let NombreCarreraBD = carrera.find((carrera) => carrera.idCarrera === alumno.idCarrera);
  
    !NombreCarreraBD?
    callback(`No existe la carrera con este id del alumno ${alumno.Nombre} en la base de datos`):
    callback(null, {
        id:alumno.idCarrera,
        carrera: NombreCarreraBD.carrera,
    });
    console.log(NombreCarreraBD);
};

/* búsqueda */
obtenerID(2, (err:null|string, alumno:Alumnos)=>{

    if(err){
        console.error(err);
        return;  
    }

getNombreCarrera(alumno, (err:null|string, respuesta:any) => {

    if(err){
        console.error(err);
        return;  
    }
    console.info(`La carrera de ${respuesta.carrera} es la que esta estudiando el 
    alumno con el id: ${respuesta.id}`);
    
});  
});

/*Nutrición*/
let getidNutricion = (id:number, callback:Function) => {

    let CarreraNutricionBD = carrera.find((carrera) => carrera.idCarrera === id);
    
    !CarreraNutricionBD?
    callback(`No existe la carrera con este ID: ${id} en la base de datos`):
    callback(null, CarreraNutricionBD);

    console.log(CarreraNutricionBD);
}
//Buscar el id del centro de estudio
let getCentroEstudios = (carrera:Carrera, Callback:Function) => {

    let CentrodeEstudiosBD = centroestudios.find((centroestudios) => centroestudios.id === carrera.idCentroEstudios);
    
    !CentrodeEstudiosBD?
    Callback(`El centro de estudios no pertence a esta carrera ${carrera.carrera}
    en la base de datos`):
    Callback(null, {
        id: carrera.idCarrera,
        nombre: carrera.carrera,
        centroestudios:CentrodeEstudiosBD.Nombre, 
    });
    console.log(CentrodeEstudiosBD);
} 

getidNutricion(3, (err:null|string, carrera:Carrera) => {

    if(err){
        return console.error(err);
    }

getCentroEstudios(carrera, (err:null|string, respuesta2:any) => {

    if(err){
        console.error(err);
        return;  
    }
    console.info(`La carrera de ${respuesta2.nombre} con el id ${respuesta2.id}
    pertence al centro de ${respuesta2.centroestudios}`);
    
});
});

/*************************************************
Nombre del centro al cual pertenece la carrera del alumno Victor Lemus
*************************************************/
//Buscar el nombre del alumno con el id
let getNombreAlumno = (id:number, callback:Function) => {

    let NombreAlumnoBD = alumno.find((alumno) => alumno.id === id ); 

    !NombreAlumnoBD?
    callback(`No existe el nombre del alumno con este ID ${id} en la base de datos`):
    callback(null, NombreAlumnoBD);

    console.log(NombreAlumnoBD);
}

let getCentrodeEstudios = (alummo:Alumnos, callback:Function) =>{

    let NombreCentroEstudioBD = centroestudios.find((centroestudios) => centroestudios.id === alummo.idCarrera);
    console.log(NombreCentroEstudioBD);

    if(!NombreCentroEstudioBD){
        callback(`No se encontro la carrera para este alummo ${alummo.Nombre}`);
    }else{
        callback(null, {
            id:alummo.idCarrera,
            nombre:alummo.Nombre,
            centroestudios:NombreCentroEstudioBD.Nombre,
        });
    }
};

getNombreAlumno(4, (err:string|null, alumno:Alumnos) => {
    if(err){
        console.error(err);
        return;  
    }

    getCentrodeEstudios(alumno, (err:null|string, respuesta3:any) =>{
        if(err){
            console.error(err);
            return;  
        }
        console.info(`El nombre del centro de ${respuesta3.centroestudios} con el id ${respuesta3.id} 
        pertenece a la carrera del alumno ${respuesta3.nombre}`);
    });
});
