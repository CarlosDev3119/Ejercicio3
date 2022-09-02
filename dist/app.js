"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raiz_1 = require("./classes/raiz");
const potencia = 3;
const numeroBase = 10;
const raiz = new raiz_1.calcularRaiz(numeroBase, potencia);
const numeroElevado = raiz.calcularRaiz();
console.log(numeroElevado);
