let nmrConta = prompt("Digite o numero da sua conta: ")
let saldo = parseFloat(prompt("Digite o seu saldo: "))
let debito = parseFloat(prompt("Digite o valor do debito: "))
let credito = parseFloat(prompt("Digite o valor do credito: "))
let saldo_Atual = saldo - debito + credito
if(saldo_Atual<=0){
    alert("Sua conta numero: " +nmrConta+ " está com o Saldo Positivo com o saldo: "+ saldo_Atual)
}else{
    alert("Sua conta numero: " +nmrConta+ " está com o Saldo Negativo com o saldo: "+ saldo_Atual)
}


