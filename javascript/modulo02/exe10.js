console.log("Exercicio 10");
console.log("---");

// Constructor
function Endereco(rua, cidade, cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}

// Factory
function fabricaDeEndereco(rua, cidade, cep){
    return {
        rua,
        cidade,
        cep
    }
}

const endereco01 = new Endereco("Rua 7", "Fortaleza", "66008-686");
console.log(endereco01);

console.log("");

const endereco02 = fabricaDeEndereco("Rua 8", "Palmas", "12356-784");
console.log(endereco02);

console.log("");
