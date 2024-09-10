let frase = prompt("Digitar frase");

console.clear()

console.log(`A frase contem ${frase.length} caracteres.`);
console.log(`Transformando toda em minúsculo: ${frase.toLocaleLowerCase()}`);
console.log(`Transformando toda em maúsculo: ${frase.toLocaleUpperCase()}`);
console.log(`O primeiro caractere da frase é ${frase.charAt(0)}`);
console.log(`Frase dividida: ${frase.split(" ")}`);
console.log(`Frase se os 5 primeiros caracteres ${frase.slice(5)}`);