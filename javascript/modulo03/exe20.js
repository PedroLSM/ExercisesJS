console.log("Exercicio 20");
console.log("---");

const numbers5 = [1, 2, 6, 10, 4, 5];

console.log(getMax(numbers5));
console.log(getMax2(numbers5));

console.log("");

console.log(getMax([]));
console.log(getMax2([]));

function getMax(array){
    let max = array.sort((a, b) => a - b)[array.length - 1];
    return max;
}

function getMax2(array) {   
    return  array.reduce((accumulate, current) => {
                accumulate = Math.max(accumulate, current);
                return accumulate;
            }, array[0]);
}

console.log("");