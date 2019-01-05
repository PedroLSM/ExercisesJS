console.log("Exercicio 09");
console.log("---");

const endereco = {rua: "Rua 8", cidade: "Tocantins", cep: "12356-784"};
MostrarEndereco(endereco);

function MostrarEndereco(address) {
    for (const key in address) {
        console.log(key, address[key])
    }
}

console.log("");