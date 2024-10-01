let nome1 = prompt("Qual o nome do primeiro time?")
let nome2 = prompt("Qual o nome do outro time?")
let gol1= parseInt(prompt("Quantos Gols o time " + nome1+ " Marcou?"))
let gol2= parseInt(prompt("Quantos Gols o time " + nome2+ " Marcou?"))
if(gol1 > gol2){
    alert("O Time "+ nome1+ " Ganhou com: " + gol1+" Gols")
}else{
    alert("O Time "+ nome2+ " Ganhou com: " + gol2+" Gols") 
}

