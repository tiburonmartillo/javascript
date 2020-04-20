import { Persona } from "../temas Base/interface";


let Personas: Array<Persona> = [
    {
      id: 1,
      nombre: "Karlos",
      apellido: "lao",
      edad: 23,
      sexo: "m",
    },
    {
      id: 2,
      nombre: "chon",
      apellido: "poe",
      edad: 24,
      sexo: "m",
    },
    {
      id: 3,
      nombre: "chan",
      apellido: "rio",
      edad: 3,
      sexo: "f",
    },
    {
      id: 4,
      nombre: "chin",
      apellido: "wer",
      edad: 2,
      sexo: "f",
    },
  ];
  
  let Salario: Array<any> = [
    {
      id: 1,
      salario: 5000,
    },
    {
      id: 2,
      salario: 10000,
    },
    {
      id: 3,
      salario: 2000,
    },
    {
      id: 4,
      salario: 4000,
    },
  ];
  
  interface resolveFinal{
  nombre:string,
  salario:number
  }

  const getEmpleado=(id:number)=>{
      return new Promise((resolve,reject)=>{
          const Empleado=Personas.find((persona)=>persona.id==id);

        if(!Empleado){reject(`No se ha encontrado al usuario con id: ${id}`);}

          resolve(Empleado);

      });
  };
  


  const getSalario = (Empleado:Persona):Promise<resolveFinal> =>{// Persona es para obtener las caracteristicas de la imterfaz Persona
new Promise((resolve,reject)=>{

        const salarioEmpleado=Salario.find((salario)=>salario.id==Empleado.id);

        if(!salarioEmpleado){
            reject(`no se encuentrasalario para el pempleado: ${Empleado.nombre}`)
        }resolve({
            nombre:Empleado.nombre,
            salario:salarioEmpleado.salario,
        })
});
  };

  getEmpleado(3)
  .then((mensaje:any)=>{
      console.log('ejecucion de resolve');
      console.log(mensaje);

      getSalario(mensaje)
      .then((resolve)=>{
          console.log(`el emplead: ${resolve.nombre} gana un salario de: ${resolve.salario}`);
    
      })
      .catch((reject:string)=>console.log(reject));
      
    })//then recibe el parametro de resolve y funciona cuando es exitosa
  .catch((reject:string)=>{
    console.log('ejecucion de reject');
    console.log(reject)
  });// catch recibe el parametro de reject cuando no es exitosa la función