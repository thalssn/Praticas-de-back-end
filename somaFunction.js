function soma (n1, n2){
    const produto = `A soma de ${n1} + ${n2} é igual a ${n1+n2}`
    return produto
}

console.log(soma(4,6))

//Usando arguments

function somar(){
    console.log(arguments)
    let total = 0;
    for(let i = 0; i<arguments.length; i++){
        total += arguments[i];
    }

    return total;
}

console.log(somar([1, 2, 4]))