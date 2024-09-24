let n = parseInt(prompt("Digite um número"));

do {
    document.write(n++ + "<br>") //br quebra a linha

} while (n < 100);

//do irá iniciar o programa mesmo se n for menor que 100
//while define que enquanto n for menor que 100 o bloco vai imprimir no html o valor de n e irá incrementa-lo