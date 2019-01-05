function ATM(){
    const notas = [100, 50, 20, 10, 5, 2];

    this.Sacar = function(valor){
        const result = [];
        for (let nota of notas) {
            if(valor <= 1) break;

            if(nota <= valor) {
                let qtd = Math.floor(valor / nota);
                valor = valor % nota;
                result.push({quantidade: qtd, nota: nota})
            }
        }
    
        return result;
    }
}

let Caixa = new ATM();
let notasSacadas = Caixa.Sacar(255);

console.log(notasSacadas);

// for (const notas of notasSacadas) {
//     console.log(notas);
// }