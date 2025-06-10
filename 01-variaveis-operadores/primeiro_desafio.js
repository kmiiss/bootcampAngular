/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço de combustível;
2 - Gasto médio de combustível do carro por KM
3 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitroCombustivel = 11;
const kmViagemTotal= 400;

let litrosConsumidos = kmViagemTotal / kmPorLitroCombustivel;
const valorGastoTotal = litrosConsumidos * precoCombustivel;

console.log(valorGastoTotal.toFixed(2));  