import { calcularRaiz } from "./classes/raiz";

const potencia = 3;
const numeroBase = 10;

const raiz = new calcularRaiz(numeroBase, potencia);

const numeroElevado = raiz.calcularRaiz();

console.log(numeroElevado);