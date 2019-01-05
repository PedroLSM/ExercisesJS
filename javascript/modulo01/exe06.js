console.log("Exercicio 06")
console.log("---")

var notas = [100, 80, 50, 100];

let media = CalcularMedia(notas);
let conceito = Conceito(media);

console.log(media, conceito);

function CalcularMedia(notas){
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }

    let media = soma / notas.length;

    return media;
}

function Conceito(media){
    if(media < 60)   return 'F';
    
    if(media < 70)   return 'D';
    
    if(media < 80)   return 'C';

    if(media < 90)   return 'B';
    
    return 'A';
}

console.log("");