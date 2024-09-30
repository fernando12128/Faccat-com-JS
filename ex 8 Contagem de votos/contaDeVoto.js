var total_eleitores = parseInt(prompt("Digite o total de eleitores: "))
var vt_brancos = parseInt(prompt("Digite o numero de votos brancos: "))
var vt_nulos = parseInt(prompt("Digite o numero de votos nulos: "))
var vt_validos = parseInt(prompt("Digite o numero de votos validos: "))
var porcetagem_vt_brancos = vt_brancos / total_eleitores * 100
var porcetagem_vt_nulos = vt_nulos/ total_eleitores * 100
var porcetagem_vt_validos = vt_validos / total_eleitores * 100
alert("A porcetagem de votos "+ vt_brancos + " é " + porcetagem_vt_brancos)
alert("A porcetagem de votos "+ vt_nulos + " é " + porcetagem_vt_nulos)
alert("A porcetagem de votos "+ vt_validos+ " é " + porcetagem_vt_validos)