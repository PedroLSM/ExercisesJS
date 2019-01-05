console.log("Exercicio 18");
console.log("---");

let numbers3 = [1, 2, 3, 4];

console.log(move(numbers3, 2, 0));

/*
[0, 1, 2, 3]
------------
[1, 2, 3, 4]

[2]
=> 0, -1, -2

*/

function move(array, index, offset) {

    if(offset < 0 && Math.abs(offset) > index){
        console.error("Error - Movimento Invalido");
        return "";
    }

    if(index + offset >= array.length || index >= array.length || offset >= array.length || index < 0){
        console.error("Error - Movimento Invalido");
        return "";
    }

    let numero = array.splice(index, 1);
    array.splice(offset + index, 0, numero[0]);

    return array;
}

console.log("");

