console.log("Exercicio 11");
console.log("---");

function Endereco(rua, cidade, cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}

const address1 = new Endereco("Rua 7", "Fortaleza", "66008-686");
const address2 = new Endereco("Rua 7", "Fortaleza", "66008-686");
const address3 = address1;

console.log(EhIgual(address1, address2));
console.log(SaoOsMesmo(address1, address3));
console.log(SaoOsMesmo(address2, address3));

function EhIgual(address1, address2){
    for (const key in address1) {
        if(address1[key] !== address2[key]) {
            return false;
        }
    }
    
    return true;
}

function SaoOsMesmo(address1, address2){
    return address1 === address2;
}

console.log("");