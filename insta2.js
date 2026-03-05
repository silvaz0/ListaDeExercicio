// Criar um programa para verificar se o número 12 é divisível por 2 e por 3
numero = 12

if numero % 2 == 0 and numero % 3 == 0:
    print("12 é divisível por 2 e por 3")
else:
    print("12 não é divisível por 2 e por 3")


// Criar um programa para mostrar um desconto de 12% para produtos acima de R$800
preco = 900

if preco > 800:
    desconto = preco * 0.12
    preco_final = preco - desconto
    print("Preço com desconto:", preco_final)
else:
    print("Sem desconto")


// Criar um programa para mostrar os números de 1 a 10 usando laço de repetição
for i in range(1, 11):
    print(i)


// Criar um programa para mostrar apenas os números pares entre 1 e 20
for i in range(1, 21):
    if i % 2 == 0:
        print(i)


// Criar um programa para mostrar apenas os números ímpares entre 1 e 20
for i in range(1, 21):
    if i % 2 != 0:
        print(i)


// Criar um programa para mostrar a tabuada do 5
for i in range(1, 11):
    print("5 x", i, "=", 5 * i)


// Criar um programa para mostrar os números de 1 a 7 usando while
i = 1
while i <= 7:
    print(i)
    i += 1


// Criar um programa para mostrar a tabuada do 3 usando while
i = 1
while i <= 10:
    print("3 x", i, "=", 3 * i)
    i += 1


// Criar um programa para mostrar o fatorial de 5
fatorial = 1

for i in range(1, 6):
    fatorial = fatorial * i

print("Fatorial de 5 =", fatorial)


// Criar um programa para saber se o número 7 é primo
numero = 7
primo = True

for i in range(2, numero):
    if numero % i == 0:
        primo = False

if primo:
    print("7 é primo")
else:
    print("7 não é primo")


// Criar um programa para calcular a potência de 2³
resultado = 2 ** 3
print("Resultado:", resultado)