console.log("Exercicio 16");
console.log("---");

const numeros = [1, 2, 3, 4];

console.log(includes(numeros, 1));
console.log(includes(numeros, 0));

function includes(array, searchElement) {
    for (const element of array) {
        if(element === searchElement) return true;
    }
    return false;
}

console.log("");