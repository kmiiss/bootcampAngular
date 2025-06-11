/*
    2 - Cire uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamado José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer 
    o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

  constructor(nome, peso,altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura); 
}
  classificarIMC() {
    const imc = this.calcularIMC();

    if (imc < 18.5){
        return('Você está abaixo do peso.')
    } else if (imc >= 18.5 && imc < 25){
        return('Você está com o peso normal.');
    } else if (imc >= 25 && imc < 30){
        return ('Você está com com sobrepeso.');
    } else if (imc >= 30 && imc < 35){
        return ('Você está com com obesidade grau I.');
    } else if(imc >= 35 && imc < 40){
        return ('Você está com com obesidade grau II.');
    } else (imc > 40); {
        return ('Você está com com obesidade grau III.');
    }
  }
}

const jose = new Pessoa('jose', 40, 1.75);
console.log(jose.classificarIMC());

const camila = new Pessoa('camila', 75, 1.59);
console.log(camila.classificarIMC());
