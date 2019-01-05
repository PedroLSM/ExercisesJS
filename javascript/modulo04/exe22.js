console.log("Exercicio 22");
console.log("---")

function sum(...array){
    if (array.length == 1 && Array.isArray(array[0])){
        array = array[0];
    }
    return array.reduce((a, b) => { return a + b }, 0);
}

console.log(sum(0, 1, 2, 3, 4));
console.log(sum([5, 1, 2, 3, 4]));

console.log("")