function calcularAreaEPerimetroDoCirculo(raio){

    const area = Math.PI * raio * raio;
    const perimetro = 2 * Math.PI * raio;

    return{
        area: area,
        perimetro: perimetro
    };
}

const raio = 10;
const resultado = calcularAreaEPerimetroDoCirculo(raio);
console.log("Area do circulo: ", resultado.area);
console.log("Perímetro do círculo: ", resultado.perimetro);