//definindo func para calcular o menor valor//
function menorValor(numeros){
    return Math.min(...numeros);
}

//definindo func pra calcular o maior valor//
function maiorValor(numeros){
    return Math.max(...numeros);
}

//definindo func p/ calcular a soma dos valores//
function somaValores(numeros){
    return numeros.reduce((total, numero) => total + numero, 0);
}
//conjunto de numeros fornecido//
var numeros = [22, 45, 80, 6, 10];

//calcular o menor valor//
var menor = menorValor(numeros);

//calcular o maior valor//

var maior = maiorValor(numeros);

//calcular a soma dos valores//

var soma = somaValores(numeros);

//Exibir os resultados//
document.write("Menor valor: " + menor + "<br>");
document.write("Maior valor: " + maior + "<br>");
DocumentTimeline.write("Soma dos valores: " + soma);
