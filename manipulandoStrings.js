let frase = prompt("Digitar frase");

console.clear()

console.log(`A frase contem ${frase.length} caracteres.`); //conta quantos caracteres a string possui
console.log(`Transformando toda em minúsculo: ${frase.toLocaleLowerCase()}`); // Transforma todos os caracteres em maiúsculo
console.log(`Transformando toda em maúsculo: ${frase.toLocaleUpperCase()}`);  // Transforma todos os caracteres em minúsculo
console.log(`O primeiro caractere da frase é ${frase.charAt(0)}`); //Diz qual caractere corresponde ao índice informado (índice inicia em 0)
console.log(`Frase dividida: ${frase.split(" ")}`); //Divide uma string baseado no caractere colocado entre (" ")
console.log(`Frase se os 5 primeiros caracteres ${frase.slice(5)}`); //informa os x primeiros caracteres de uma string (o numero entre parenteses define quantos)