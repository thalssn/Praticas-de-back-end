let num = Number(prompt("Digite o número: "));
let divisao = 0;

for (let i = 1; i<=num; i++){
    if(num % i == 0){
        divisao++;
    }
}

if(divisao == 2){
    alert(`O número ${num} é primo!`)
} else{
    alert(`${num} não é um número primo`)
}