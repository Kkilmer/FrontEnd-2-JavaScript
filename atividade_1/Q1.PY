# Lista para armazenar alturas
alturas = []

# Contadores para homens e mulheres
homens = 0
mulheres = 0

# Loop para coletar dados
for i in range(5):
    altura = float(input(f"Digite a altura da pessoa {i+1} (em metros): "))
    sexo = input(f"Digite o sexo da pessoa {i+1} (M ou F): ").upper()
    
    # Adicionar altura à lista
    alturas.append(altura)
    
    # Verificar sexo e contar
    if sexo == 'M':
        homens += 1
    elif sexo == 'F':
        mulheres += 1

# Calcular resultados
maior_altura = max(alturas)
menor_altura = min(alturas)
media_altura_homem = sum(altura for altura in alturas if altura > 0) / homens
numero_mulheres = mulheres

# Apresentar resultados
print(f"A maior altura do grupo é: {maior_altura} metros")
print(f"A menor altura do grupo é: {menor_altura} metros")
print(f"A média de altura dos homens é: {media_altura_homem:.2f} metros")
print(f"O número de mulheres é: {numero_mulheres}")