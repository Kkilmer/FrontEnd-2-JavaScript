function calcularMontante(){

    var capitalInicialInvestido = parseFloat(prompt("Digite o valor do capital inicial investido: "));
    var taxaDeJuros = parseFloat(prompt("Digite a taxa de juros mensal (em percentual): "));
    var tempoMeses = parseInt(prompt("Digite o tempo do investimento(em meses):"));

    taxaDeJuros /= 100;
    var montante = capitalInicialInvestido * Math.pow ((1 + taxaDeJuros), tempoMeses);
    montante = montante.toFixed(2);
    alert("O montante ao final de " + tempoMeses + "meses será de R$" + montante);
}

calcularMontante();