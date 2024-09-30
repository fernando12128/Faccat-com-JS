let salarioFixo = parseInt(prompt("Qual o valor do seu salario fixo? "))
let totalVendas = parseInt(prompt("Qual foi o valor total de suas vendas? "))
if(totalVendas < 1500){
    let vendasMenor = (3/100) * totalVendas
    alert("O Valor total do seu salario é " + (salarioFixo + vendasMenor + totalVendas))
}else{
    let  calculoVendas =  totalVendas-1500
    let  vendasMenor = (3/100) * totalVendas
    let  vendasMaior = (5/100) * calculoVendas
    alert("O Valor total do seu salario é " + (salarioFixo + vendasMenor + vendasMaior + totalVendas))
}