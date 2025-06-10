/* 
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto considerando 
    o preço normal da etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o 
    cálculo adequado.

    Código condição de pagamento:
    1 - À vista Débito, recebo 10% de desconto;
    2 - À vista no dinheiro ou Pix, recebe 15% de desconto;
    3 - Em duas vezes, preço normal da etiqueta sem juros;
    4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10%;
*/


function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

const precoEtiqueta = 150;
const formaDePagamento = 2;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else (formaDePagamento === 4); {
    console.log(aplicarJuros(precoEtiqueta, 10));
}
