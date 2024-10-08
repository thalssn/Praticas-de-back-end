//Function declaration

function nome (a,b){
    console.log(`Olá ${a}, tudo bem? Muito prazer ${b}`)
}

nome('Thalisson','Vinicius');

//Arrow function

const nome1 = (a,b) => {
    console.log(`Olá ${a}, tudo bem? Muito prazer ${b} (em arrow function)`)
}

nome1('Thalisson','Vinicius');

const saudacao = (nome) => `Olá ${nome}!`
console.log(saudacao("Thalisson"))

//Function Express

const saudacao2 = function(nome, idade){
    console.log(`Olá ${nome}`);
    console.log( `Você tem ${idade} anos`)
}

saudacao2("Vinicius", 26);

//Hoisting: Permite que a função seja chamada antes de ser declarada

soma(2,4);

function soma(n1,n2){
    console.log(`A soma de ${n1} + ${n2} é igual a ${n1+n2}`)
}