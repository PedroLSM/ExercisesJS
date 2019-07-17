console.log("Exercicio 08");

NumerosPrimosAte(20);

function NumerosPrimosAte(limite) {

    for (let numero = 2; numero <= limite; numero++) {

        let numDivisores = NumeroDeDivisores(numero);
        if (numDivisores == 2) {
            console.log(numero);
        }

    }

}

function NumeroDeDivisores(numero) {
    let numDivisores = 0;
    let j = 1;
    do {
        if (numero % j == 0) numDivisores++;
        j++
    } while (j <= numero && numDivisores <= 2);

    return numDivisores;
}

