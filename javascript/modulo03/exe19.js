console.log("Exercicio 19");
console.log("---");

let number4 = [1, 2, 3, 4, 5, 1];

console.log(contarOcorrencias(number4, 5));
console.log(contarOcorrencias2(number4, 6));

function contarOcorrencias(array, searchElement){
    let ocorrence = array.filter(value => value === searchElement).length;
    
    return ocorrence;
}

// Com Metodo Reduce
function contarOcorrencias2(array, searchElement){
    let ocorrence = array.reduce((numOcorrencia, element) => {
        if(element === searchElement) {
            numOcorrencia++;
        }
        return numOcorrencia;
    }, 0);
    
    return ocorrence;
}

console.log("");