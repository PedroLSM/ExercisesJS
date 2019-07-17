console.log("Exercicio 02")

function FizzBuzz(x) {
    if (typeof x !== "number")
        return NaN;

    if (x % 3 == 0 && x % 5 == 0)
        return "FizzBuzz";
    else if (x % 3 == 0)
        return "Fizz";
    else if (x % 5 == 0)
        return "Buzz";

    return "Not divisible by 3 or 5";
}

for (let c = 0; c < 16; c++) {
    console.log(c, FizzBuzz(c));
}
console.log(true, FizzBuzz(true));

console.log("");