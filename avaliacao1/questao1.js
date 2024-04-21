//questao 1 da lista//

function calcularAnos(populacaoA, taxaA, populacaoB, taxaB){
    let anos = 0;
    while (populacaoA < populacaoB){
        populacaoA *= (1 + taxaA / 100);
        populacaoB *=(1 + taxaB / 100);
        anos ++;
    }
    return anos;
}

const populacaoA = 80000;
const taxaA = 3;
const populacaoB = 200000;
const taxaB = 1.5;

const anosNecessarios = calcularAnos(populacaoA, taxaA, populacaoB, taxaB);

document.write('Serão necessários ${anosNecessarios} anos para que a população A ultrapasse ou iguale a população B');
