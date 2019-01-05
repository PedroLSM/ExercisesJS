console.log("Exercicio 08");

NumerosPrimosAte(20);

function NumerosPrimosAte(limite){
    
    for(let numero = 2; numero <= limite; numero++){
        
        let numDivisores = NumeroDeDivisores(numero);
        if (numDivisores == 2) {
            console.log(numero);
        }
        
    }

}

function NumeroDeDivisores(numero) {
    let numDivisores = 0;
    for (let j = 1; j <= numero; j++) {
        if (numero % j == 0) {
            numDivisores++;
        }
    }
    return numDivisores;
}

