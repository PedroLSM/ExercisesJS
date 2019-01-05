console.log("Exercicio 17");
console.log("---");

const numeros2 = [1, 2, 3, 4, 1, 5, 1];

const result = except(numeros2, [1, 4, 3])
console.log(result);



function except(array, excluded) {
    for (const exc of excluded) {
        array = array.filter(number => number != exc);
    }
    return array;
}

console.log("");