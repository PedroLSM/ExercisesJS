console.log("Exercicio 03")

function verificarVelocidade(vel) {
    let speedLimit = 70;
    let kmPerPoint = 5;

    let pontos = Math.floor((vel - speedLimit) / kmPerPoint);

    if (pontos < 1) return "Ok!";
    return (pontos < 12) ? pontos + " Ponto(s)." : "Licensa Suspensa.";
}

for (let i = 70; i < 100; i += 4) {
    console.log(i, verificarVelocidade(i));
    console.log("---");
}

console.log("");