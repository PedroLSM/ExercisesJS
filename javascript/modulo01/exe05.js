console.log("Exercicio 05")
console.log("---")

var filme = {
    titulo: 'Advanced 3.0',
    ano: 2018,
    nota: 4.7,
    diretor: 'Alisson & Gustavo'
}

MostrarPropriedades(filme);

function MostrarPropriedades(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) == "string") {
            console.log(key, obj[key]);
        }
    }
}

console.log("")