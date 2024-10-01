let nmr1 = parseInt(prompt("Digite um numero: "))
let nmr2 = parseInt(prompt("Digite outro numero: "))
let nmr3 = parseInt(prompt("Digite outro numero"))
let maior = (nmr1>nmr2 && nmr3<nmr2)? "O Maior é "+nmr1 : (nmr2>nmr1 && nmr3<nmr1)?"O Maior é "+nmr2:(nmr1>nmr3 && nmr2<nmr3)? "O Maior é "+nmr1: (nmr3>nmr1 && nmr2<nmr1)? "O Maior é "+nmr3 : (nmr2>nmr3 && nmr1<nmr3)? "O Maior é " +nmr2 : (nmr3>nmr2 && nmr1<nmr2)? "O Maior é "+ nmr3 : "Existe numero repetido"

alert(maior) 

