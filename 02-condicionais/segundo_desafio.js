/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoEtanol= 5.79;
const precoGasolina = 6.66;
const kmPorLitroCombustivel = 11;
const kmViagemTotal= 200;
const tipoCombustivel = 'Gasolina';

let litrosConsumidos = kmViagemTotal / kmPorLitroCombustivel;


if(tipoCombustivel === "Etanol") {
    const valorGastoTotal = litrosConsumidos * precoEtanol;
    console.log(valorGastoTotal.toFixed(2)); 
} else {
    const valorGastoTotal = litrosConsumidos * precoGasolina;
    console.log(valorGastoTotal.toFixed(2)); 
}

 