function calcularSalarioAtual(salarioInicial, anoAtual) {
    let salario = salarioInicial;
    let percentualAumento = 0.015; // 1.5% de aumento em 1996

    for (let ano = 1996; ano <= anoAtual; ano++) {
        salario += salario * percentualAumento;
        percentualAumento *= 2; // Dobra o percentual de aumento a cada ano
    }

    return salario;
}

// Solicita ao usuário o salário inicial
const salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Calcula o salário atual
const salarioAtual = calcularSalarioAtual(salarioInicial, anoAtual);

console.log(`O salário atual do funcionário é R$ ${salarioAtual.toFixed(2)}`);
