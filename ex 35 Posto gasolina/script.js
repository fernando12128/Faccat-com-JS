let abasteceu = parseInt(prompt("Quantos litros vc abasteceu?"))
let tipoCombustiver = prompt("Qual tipo de combustivel? G-galolina ou A-Alcool")

switch (tipoCombustiver) {
    case 'G':
        if (abasteceu > 20) {
            let valor = abasteceu * 3.30
            let desconto6 = ((6 / 100) * valor) - valor
            alert("O valor da sua gasolina é " + desconto6)

        } else {
            let valor = abasteceu * 3.30
            let desconto4 = ((4 / 100) * valor) - valor
            alert("O valor da sua gasolina é " + desconto4)
        }
        break;

    case 'A':
        if (abasteceu > 20) {
            let valor = abasteceu * 2.90
            let desconto5 = ((5 / 100) * valor) - valor
            alert("O valor do Alcool é " + desconto5)
        } else {
            let valor = abasteceu * 2.90
            let desconto3 = ((3 / 100) * valor) - valor
            alert("O valor do Alcool é " + desconto3)
        }
        break

}