import {Persona}from './interface';


/********Caracteristicas de los parametros de las funciones+*********
Explicaremos las caracteristicas que tienen los parametros d elas funciones

parametros obligatorios:
parametros opcionales:
parametros default/defecto:

notas:
1. primer parametro no puede ser opcional
2. siempre los parametros opcionales deben escribirse al final
********+*********/

// function suma(x: number,ultimo: number = 10, y?: boolean) {
//   let suma = x + ultimo;
//     if(y==undefined) console.log(suma);
// }

// suma(10,20);

/********Funcione de flechas+*********/

function impresioDatos() {
  console.log("hola mundo desde una función standard");
}

const ArrowFunction = (x: number, y: number) => x + y; // cuando solo es un return no necesita los bigotes

// console.log(ArrowFunction(10,20));

/********+*********
Métodos array función de flecha

1. foreach
2. map
3. find
4. filter
5. some
********+*********/

let Arreglonumerico: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let personas: Array<Persona> = [
  {id:1,nombre: "Tiburon",sexo:'M',apellido:'martillo',edad:19,estatura:189},
  {id:1,nombre: "Daniela",sexo:'F',apellido:'Estrada',edad:26,estatura:160},
  {id:1,nombre: "Laura",sexo:'F',apellido:'martillo',edad:19,estatura:189},
];

personas[0].apellido
// for (let i=0;i<Arreglonumerico.length;i++){
//     let elemento=Arreglonumerico[i];
//     console.log(elemento);

// }
let ArregloNuevo: any = [];
/********Foreach+*********
recorre un arreglo y acada valor le aplica una acción
********+*********/

// Arreglonumerico.forEach((elemento) => console.log("x", elemento));

/********Map+*********
Es similar a forEach ya que por cada valor en el arreglo le aplica una acción,la diferencia es que map nos crea un arreglo y forEach no
********+*********/

// ArregloNuevo= Arreglonumerico.map((elemento) =>
// (elemento % 2 == 0?
//  'par':'impar'));

// console.log(ArregloNuevo);

/********Find+*********
Encuentra un valor dentro de un arreglo y nos comoarte un valor nuevo
********+*********/
let persona = personas.find((elemento) => elemento.id == 2);


/********filter+*********
Encuentra varios valores y regresa un array con ellos
********+*********/
let personasM= personas.filter((persona)=>persona.sexo=='M');
// console.log(personasM);


/********Some+*********
Encuentra un valor dentro de un arreglo y nos regresa un true/false
true= para cuando existe el valor
false= para cuando no existe
********+*********/

let existe= personas.some((persona)=>persona.id==2&&persona.nombre=='chinese');

// console.log(existe);
