let numeros = []; //Define que a variável é um array

for(let i = 0; i<10 ; i++){
    numeros.push(prompt("Digitar Numero: "))    //Adiciona por meio do prompt a quantidade de vezes especificadas no for
}
document.write(`Adicionado ao Array: ${numeros}`) //Exibe o array