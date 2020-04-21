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
        idCarrera:4
    },
    {
        id:3,
        Nombre:"Daniel Palacios",
        idCarrera:5        
    },
    {
        id:4,
        Nombre:"Victor Lemus",
        idCarrera:1
    },
    {
        id:5,
        Nombre:"Karen Sanchez",
        idCarrera:2
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

/********Obtener Id+*********

********+*********/

const obteneridCarrera=(id:number)=>{
    return new Promise((resolve,reject)=>{
        const obteneralumno=alumno.find((alumno)=>alumno.id==id);

      if(!alumno){reject(`No se ha encontrado al alumno con id: ${id}`);}
        resolve(obteneralumno?.idCarrera);

    });
};

const obtenerNombreCarrera=(id:number)=>{
    return new Promise((resolve,reject)=>{
        const obntenerIDcarrera=carrera.find((carrera)=>carrera.idCarrera==id);
        if(carrera) return resolve(obntenerIDcarrera?.carrera)
    })
};


const obteneridCentro=(nombre:string)=>{
    return new Promise((resolve,reject)=>{

        const idCentro=carrera.find((carrera)=>carrera.carrera==nombre);
        if(nombre){resolve(idCentro?.idCentroEstudios)
        }else{
            reject(`No se encuentra la carrera ${nombre}`)
        }
    });
};


const obtenernombreCentro=(idCentro:number)=>{
    return new Promise((resolve,reject)=>{
        const nombreCentro=centroestudios.find((centroestudios)=>centroestudios.id==idCentro)
        if(idCentro){
            resolve(nombreCentro?.Nombre)
        }reject(`no existe ese centro`)

    });
};

const obtenerNombreAlumno=(nombre:string)=>{
    return new Promise((resolve,reject)=>{
        const nombreAlumno=alumno.find((alumno)=>alumno.Nombre==nombre)
        if(nombre){
            resolve(nombreAlumno?.idCarrera)
        }reject(`no existe el alumno ${nombre}`)

    });
};



/********ejercicio 2+*********

********+*********/

obteneridCarrera(2)
  .then((mensaje:any)=>{
    //   console.log('ejecucion de resolve');
      console.log(mensaje);

      obtenerNombreCarrera(mensaje)
      .then((respuesta:any)=>{
          console.log(`El alumno con id 2 estudia la carrera de ${respuesta}`);
          
      })
    
      })
.catch((reject:string)=>{
//    console.log('ejecucion reject');
    console.log(reject);
});


/******** ejercicio 3+*********

********+*********/

obteneridCentro('Nutricion')
.then((consulta:any)=>{
    console.log(consulta);
    obtenernombreCentro(consulta)
    .then((centro:any)=>{
        console.log(`El centro de estudios al que pertenece la carrera Nutrición es ${centro}`);
        
    })
    
});

/********ejercicio 4+*********
 
 ********+*********/


obtenerNombreAlumno('Victor Lemus')
.then((tipo:any)=>{
    console.log(tipo);
    obtenernombreCentro(tipo)
    .then((fria:any)=>{
        console.log(`El centro de estudio al que pertenece el alumno Victor Lemus es ${fria}`);
        
    })
    
});