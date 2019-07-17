console.log("Exercicio 04")

function ContarVerdadeiros(array) {
    var count = 0;
    for (let value of array) {
        if (value) {
            count++;
        }
    }

    return count;
}

let array = [1, 2, 3, undefined, "", "cinco", NaN, 0, false, null, true, { name: "pedro" }];
console.log(ContarVerdadeiros(array))
console.log("");