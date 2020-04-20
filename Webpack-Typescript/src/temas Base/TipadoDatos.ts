let variable1: number = 90;

let variable2: string = "Hola mundo";

let variable3: boolean = true;

let array1: Array<string|number>=[]

function Numerica(x: number, y: number): number {
  let resultado: number = x + y;

  return resultado;
}

const btnEjecutar: HTMLElement = document.getElementById("btnEjecutar")!; // después de : es el tipo de dato

btnEjecutar.addEventListener("click", CalculatEdadparaCasarse);

function CalculatEdadparaCasarse() {
  const inputEdadUsuario: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("edadUsuario")
  );

  const edadUsuario: number = Number(inputEdadUsuario.value);

  let resultado: number = edadUsuario + 20;

  const outputElement:HTMLDivElement=<HTMLDivElement>document.querySelector('#output');

  outputElement.innerText=`Te vas a casar a los ${resultado}`;
}
