const readline = require('readline');//REVISAR.. ANDAMENTO

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let alturas = [];
let homens = 0;
let mulheres = 0;

rl.question("Digite a altura e o sexo de 5 pessoas (M ou F separados por espaço): ", (respostas) => {
    const pessoas = respostas.split(' ');
    for (let i = 0; i < pessoas.length; i += 2) {
        const altura = parseFloat(pessoas[i]);
        const sexo = pessoas[i + 1].toUpperCase();

        alturas.push(altura);

        if (sexo === 'M') {
            homens++;
        } else if (sexo === 'F') {
            mulheres++;
        }
    }

    const maiorAltura = Math.max(...alturas);
    const menorAltura = Math.min(...alturas);
    const somaAlturaHomem = alturas.reduce((acc, altura) => {
        if (altura > 0) {
            return acc + altura;
        } else {
            return acc;
        }
    }, 0);
    const mediaAlturaHomem = somaAlturaHomem / homens;

    console.log(`A maior altura do grupo é: ${maiorAltura} metros`);
    console.log(`A menor altura do grupo é: ${menorAltura} metros`);
    console.log(`A média de altura dos homens é: ${mediaAlturaHomem.toFixed(2)} metros`);
    console.log(`O número de mulheres é: ${mulheres}`);

    rl.close();
});
