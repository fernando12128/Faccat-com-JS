var salarioFixo = parseFloat(prompt("Qual é o valor do seu salario fixo: "))
var quantidadeDeCarros = parseInt(prompt("Quantos carros você vendeu?"))
var valorDeVenda = parseFloat(prompt("Qual o valor da comissão por cada carro vendido?"))
var valorTotaldeVendas = parseFloat(prompt("Qual o valor da suas vendas total?"))

var calculoDaVenda = quantidadeDeCarros * valorDeVenda
var calculoDoCarro = 5/100 * valorTotaldeVendas
var salario = calculoDaVenda + calculoDoCarro + salarioFixo
alert("O Seu Salario Final sera: " + salario)



