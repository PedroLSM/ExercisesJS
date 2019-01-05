console.log("Exercicio 23");
console.log("---")

let c1 = { 
    raio: 2,
    get area() { 
        return Math.pow(this.raio, 2) * 3.14; 
    }
}

console.log(c1.area);

console.log("");