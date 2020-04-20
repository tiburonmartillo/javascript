import { Persona } from "../temas Base/interface";

const arreglo4: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arreglo4.forEach(function (elemento) {
  // console.log(elemento);
});
/********+*********
Aplicación básica callback
********+*********/

function primerFuncion(segundafuncion: Function) {
  alert("priemro ejecuto priemrfuncion y despues segunda funcion");
  segundafuncion();
}

function segundaFuncion() {
  alert("hola se ejecuto la segunda funcion");
}

/********Segundo ejercicio callback+*********

********+*********/
function userName(saludarUsername: Function) {
  let name = prompt("Ingrese un nombre");
  saludarUsername(name);
}
function saludarUsername(nombre: string) {
  alert(`Hola ${nombre}`);
}

// userName(saludarUsername);

function suma(a: number, b: number, callback: Function) {
  //3 se recibe como parametro
  let res = a + b;
  callback(res); // 4 se invoca
}

function mostrarResultado(res: number) {
  // 1 se crea mostrar resultado
  res > 10 ? alert("es mayor a 10") : alert("reprobaste");
}
// suma(2,4,mostrarResultado);//2 se pasa como parametro

/********+*********
Uso intermedio callback
********+*********/

function eliminarUsuarios(Nombre: string, callback: Function) {
  let longitudInicial = Personas.length;

  Personas = Personas.filter(
    (persona) => persona.nombre.toLowerCase() != Nombre
  );

  if (longitudInicial == Personas.length) {
    callback(true, Nombre);
  } else {
    callback(null, Nombre);
  }
}

function mostrarUsuariosTabla(err: boolean | null, respuesta: boolean) {
  if (err) {
    console.log(
      `El usuario con nombre: ${respuesta} no existe en la base de datos`
    );
    return;
  }

  const tbody = document.querySelector("#tbody");
  Personas.forEach((persona) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${persona.id}</td>
    <td>${persona.nombre}</td>
    <td>${persona.edad}</td>
    <td>${persona.sexo}</td>
    `;

    tbody?.appendChild(tr);
  });
}

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

let getEmpleado = (id: number, callback: Function) => {
  let empleadoDB = Personas.find((empleado) => empleado.id === id);
  if (!empleadoDB) {
    callback(`No existe un empleado con id ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

let getSalario = (empleado: Persona, callback: Function) => {
  let salarioDB = Salario.find((salario) => salario.id === empleado.id);
  if (!salarioDB) {
    callback(`No se encontró un salario para usuario ${empleado.nombre}`);
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
    });
  }
};

//Invocación de funciones

// getEmpleado(3, (err: null | string, empleado: Persona) => {
//   if (err) {
//     return console.error(err);
//   }
//   getSalario(empleado, (err: null | string, resp: any) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.info(`el salario de ${resp.nombre} es de ${resp.salario}`);
// });
// });

/********callbacks asincronos+*********

********+*********/
function segundafuncion(){
  console.log('se ejecuta segunda funcion');
  
}

function getEmpleadoAsincronos(id: number, callback: Function) {
  setTimeout(() => {
    
    
    const empleado = Personas.find((persona) => persona.id == id);
    if (!empleado) {
      callback(`No eciste empleado con el id`);
    } else {
      
      callback(null, empleado);
    }
  }, 2000);
}

getEmpleadoAsincronos(2,(error:string|null, empleado:Persona)=>{
  if(error){
    console.log(error);
    
  }
  console.log(empleado);
  
});

segundafuncion();