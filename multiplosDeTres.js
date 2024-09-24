let multiplo=0;

for(let i = 1; i<=100; i++){ //para let i, quanto i for menor ou igual que 100, incremente i
    if(i%3 == 0){ 
        console.log(`${i} é multiplo de 3`)
        multiplo++
        //se resto da divisão de i por 3 for 0 ele executa o console.log e incrementa o multiplo
    }
}

console.log("Existem " + multiplo + " multiplos de 3 de 1 a 100.")