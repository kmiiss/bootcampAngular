/* 1 - Crir uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gastoMedioCombustivelporKm;

    constructor (marca, cor, gastoMedioCombustivelporKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelporKm = gastoMedioCombustivelporKm
    }

    calcularGastoDaViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioCombustivelporKm * precoCombustivel;
    }
}

const spaceFox = new Carro('Volkswagen', 'Prata', 1/12);
console.log(spaceFox.calcularGastoDaViagem(457, 5));

const corolla = new Carro('Toyota', 'Azul', 1/13);
console.log(corolla.calcularGastoDaViagem(457, 5));