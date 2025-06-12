
const { gets, print } = require('./funcoes-auxiliares');

const numerosSorteado = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteado.push(numerosSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteado.length; i++) {
    const numeroSorteado = numerosSorteado[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}
print(maiorValor);