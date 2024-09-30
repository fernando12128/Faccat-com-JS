let nm1 = parseInt(prompt("Digite da primeira avaliação do aluno: "))
let nm2 = parseInt(prompt("Digite a  segunda nota do aluno: "))
let calcularNota = nm1 * nm2 / 2
if(calcularNota <=5){
    alert("Você NÃO foi aprovado")
}else{
    alert("Você foi aprovado")
}
