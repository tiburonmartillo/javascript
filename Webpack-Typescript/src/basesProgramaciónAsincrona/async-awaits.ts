import { Persona, Salario } from "../temas Base/interface";

const GetNombre = (): Promise<string> => {
  // HACE QUE NO MARQUE ERROR EN EL THEN POR NO SER STRING
  return new Promise((resolve, reject) => {
    console.log("me estoy resolviendo...");
    if (true) {
      resolve("Carlos");
    } else {
      reject(new Error("no hay usuario")); //para que pueda entrar dentro del await
    }
  });
};

async function saludos() {
  console.log('ejecutandose funcion async "saludos"');

  //asyn convierte la función saludo en una nuevapromesa
  let nombreRespuesta: string | undefined = undefined;

  //   GetNombre().then((nombre: string) => {
  //     nombreRespuesta = nombre;
  //         console.log('apenas me resolví');

  // });

  nombreRespuesta = await GetNombre();

  //   prueba();

  if (nombreRespuesta == undefined) {
    throw new Error(`Nombre del usuario con valor indefinido`);
  }

  return `Hola usuario: ${nombreRespuesta}`;
}

// function prueba() {
//   let suma = 2 + 2;
//   console.log(suma);
// }

// console.log("primero");

// saludos()
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((error: Error) => {
//     console.log(error.message);
//   });

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

let Salario: Array<Salario> = [
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

const getEmpleado = async (id: number) => {
  //asyn convierte una funcion en una promesa
  const Empleado = Personas.find((personas) => personas.id === id);

  if (!Empleado) {
    throw new Error(`Empleado con id: ${id}, no existe en la base de datos`); //tirar errores nuevos, el catch lo reconoce y comparte el error
  } else {
    return Empleado;
  }
};

const getSalario = async (Empleado: Persona) => {
  const SalarioEmpleado = Salario.find((salario) => salario.id === Empleado.id);
  if (!SalarioEmpleado) {
    throw new Error(
      `El empleado con id: ${Empleado.id} no cuenta con un salario registrado`
    );
  } else {
    return {
      nombre: Empleado.nombre,
      salario: SalarioEmpleado.salario,
    };
  }
};

const GetInformacion = async (id: number) => {
  const Empleado = await getEmpleado(id);
  const response = await getSalario(Empleado);

  return `El empleado ${response.nombre}, gana un salario de $${response.salario}`; //el return funciona como resolve
};

GetInformacion(6)
  .then((mensaje: string) => console.info(mensaje))
  .catch((err: Error) => console.log(err.message));
