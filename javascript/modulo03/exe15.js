console.log("Exercicio 15");
console.log("---");

const numbers = arrayFromRange(1, 10);
console.log(numbers);

function arrayFromRange(min, max) {
    let numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }
    return numbers;
}

console.log("");