altura = []

homens = 0
mulheres = 0

for(var i=0; i<10; i++){
    altura = prompt("Digite a altura da pessoa" + i+1 + "(em metros): ")
    sexo = prompt("Digite o sexo da pessoa" + i+1 + "(M ou F):").toString

    Array.unshift(altura)

    if(sexo == 'M')
    homens += 1
    

}