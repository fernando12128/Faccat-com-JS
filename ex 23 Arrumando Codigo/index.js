let nome = prompt("Qual o seu nome? ")
let sexo = prompt("Qual o seu sexo?(M OU F) ")
let altura = parseFloat(prompt("Qual a sua altura? (COM PONTO EX 1.64)"))
if(sexo == "M"){
    let peso_ideal = (altura* 72.7 ) - 58
    alert("O seu peso ideal seria " + peso_ideal)
}else if(sexo == "F"){
    let peso_ideal = (62.1 * altura) - 44.7
    alert("OLÁ "+nome +" O seu peso ideal seria " + peso_ideal)
}