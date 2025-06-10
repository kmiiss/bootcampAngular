function exibirMeuNome(nome) {
    return 'Meu nome é ' + nome;
} 

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(exibirMeuNome('Camila.') + ' é maior');
    } else {
        console.log('Menor');
    }
}

verificarIdade(19);