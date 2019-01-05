console.log("Exercicio 24");
console.log("---");
try{
    console.log(contarOcorrencias([2, 2, 1, 2], 2));
    console.log(contarOcorrencias(null, 2));
}
catch(e){
    console.log(e.message);
}


function contarOcorrencias(array, searchElement){

    if(!Array.isArray(array)){
        throw new Error("Insira um array.");
    }

    let ocorrence = array.reduce((numOcorrencia, element) => {
        if(element === searchElement) {
            numOcorrencia++;
        }
        return numOcorrencia;
    }, 0);
    
    return ocorrence;
}