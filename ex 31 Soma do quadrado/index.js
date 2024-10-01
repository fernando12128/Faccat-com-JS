let lado1 = parseInt(prompt("Digite o valor de um lado"))
let lado2 = parseInt(prompt("Digite o valor de um lado"))
let lado3 = parseInt(prompt("Digite o valor de um lado"))
let validacao = (lado1 + lado2 > lado3)? "Forma um triangulo" :(lado2 + lado3 >  lado1)? "Forma um triangulo" : (lado1 + lado3 > lado2)? "Forma um triangulo" : "Não forma um triangulo"
alert(validacao)