let n1 = parseInt(prompt("Digite o primeiro numero"));
let n2 = parseInt(prompt("Digite o segundo numero"));
let n3 = parseInt(prompt("Digite o terceiro numero"));

let soma = n1+n2;
let subtracao = n1-n2;
let multiplicacao = n1*n2;
let divisao = n1/n2;
let modulo = n1%n2;
let potencia = n1**n2;
let raiz1 = n1**(1/2);
let raiz2 = n2**(1/2);

console.clear();

console.log(`${n1} + ${n2} é igual a ${soma}`);
console.log(`${n1} - ${n2} é igual a: ${subtracao}`);
console.log(`${n1} x ${n2} é igual a: ${multiplicacao}`);
console.log(`${n1} dividido por ${n2} é igual a ${divisao}`); //uso de crase no console.log para facilitar exibição de textos e variáveis
console.log(`O resto da divisão é ${modulo}`);
console.log(`${n1} elevado a ${n2} é igual a ${potencia}`);
console.log(`a raiz de ${n1} é: ${raiz1}`);
console.log(`a raiz de ${n2} é: ${raiz2}`);

//Com as tres primeiras variáveis o algoritmo faz novas operações matemáticas e guarda em
//novas variáveis, exibindo-as depois no console por meio do console.log


//Novas varáveis para cálculo de delta

let delta = n2**2 - 4*n1*n3
let x1 = ((-n2) + delta ** (1/2))/2*n1
let x2 = ((-n2) - delta ** (1/2))/2*n1

console.log(`Delta igual a: ${delta}`);
console.log(`X1 é de: ${x1}`);
console.log(`X2 é de: ${x2}`);