"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
eventListener();
function eventListener() {
    var _a;
    (_a = document
        .getElementById("btnCalcular")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", calcularArea);
}
function calcularArea() {
    var altura = Number(document.getElementById("altura").value);
    var base = Number(document.getElementById("base").value);
    var triangulo = new triangulo(base, altura);
    console.log(triangulo.area);
}
