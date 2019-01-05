console.log("Exercicio 02")

function FizzBuzz(x){
    
    if(x % 3 == 0 && x % 5 == 0)
        return "FizzBuzz";
    else if(x % 3 == 0)
        return "Fizz";
    else if(x % 5 == 0)
        return "Buzz";
    
    return false;
}

for(let c = 0; c < 25; c++){
    if (FizzBuzz(c)){
        console.log(c + " é " + FizzBuzz(c));
    }
}

console.log("");