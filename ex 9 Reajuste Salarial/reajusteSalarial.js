var salarioInicial = parseInt(prompt("Qual o valor do seu salario?"))
var reajuste = parseInt(prompt("Quantos porcento do reajuste?"))
var calculo = (reajuste / 100) * salarioInicial
alert("O Seu Salario antigo é R$" + salarioInicial + " E com o ajuste de " + reajuste + "% Você vai ter um aumento de R$"+ calculo+ " entao o seu salario atual é R$" + (calculo + salarioInicial))