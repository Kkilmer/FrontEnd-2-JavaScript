//função para ver se um númro é par//

function ePar(numero){
    return numero % 2 === 0;
}

//solicita 10 numeros inteiros ao usuario//

var numeros =[];
for(var i = 0; i < 10; i++){
    var numero = parseInt(prompt("Digite um número inteiro: "));
    numeros.push(numero);
}
//calcula qtd de numeros pares e impares informada pelo usuario//

var quantidadePares = 0;
var quantidadeImpares = 0;
for (var i = 0; i < nnumeros.length; i++){
    if (eParPar(numeros[i])){
        quantidadePares++;
    }else{
        quantidadeImpares++;
    }
}
//exibe os resultados //
document.write("quantidade de números pares: " + quantidadePares + "<br>");
document.write("Quantidade de números ímpares: " + quantidadeImpares);
