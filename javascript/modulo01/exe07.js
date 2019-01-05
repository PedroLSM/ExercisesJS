console.log("Exercicio 07");

console.log(MostrarEstrelas(10));

function MostrarEstrelas(linhas){
    let star = "";

    for (let i = 1; i <= linhas; i++) {
        star += "*".repeat(i) + "\n";
    }

    return star;
}

console.log("");