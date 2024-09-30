let macas = parseInt(prompt("Quantas maças você comprou? "))

if(macas < 12){
    let calculo = macas * 1.30
    alert("O valor da sua maça é " + calculo)
}else{
    let calculo = macas * 1
    alert("O valor da sua maça é " + calculo)
}