let contador = 0

while(contador < 10){   //enquanto o valor de contador for menor que 10
    let n = Number(prompt("Digite o Número: "));    //o prompt irá solicitar para digitar um numero
    document.write(`O Quadrado de ${n} é: ${n*n}`);     //fará o quadrado do numero digitado
    contador++  //e incrementa a variável contador com mais 1.
}