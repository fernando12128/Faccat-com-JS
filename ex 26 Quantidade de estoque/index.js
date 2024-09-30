let Atual = parseInt(prompt("Digite a quantidade atual: "))
let Maxima = parseInt(prompt("Digite a quantidade maxima: "))
let minima = parseInt(prompt("Digite uma quantidade minima"))
let calculo = (Maxima + minima) / 2
if (Atual>= calculo){
    alert("Não efetuar compra")
}else{
    alert("Efetuar compra")
}