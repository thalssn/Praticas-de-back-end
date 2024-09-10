let n1, n2, qtdFaltas, media, calculo, aprovado;
    
n1 = parseFloat(prompt("Digitar n1"));
n2 = parseFloat(prompt("Digitar n2"));
qtdFaltas = prompt("Digite a quantidade de faltas: ")

media = (n1+n2)/2;

//console.log(media);

calculo = media;

console.log(calculo);
console.log(typeof(calculo));

if (media >=7 && qtdFaltas <=10){
aprovado = true;
//console.log(aprovado) exibir no console conteúdo da variável
//console.log(typeof(aprovado)) exibir no console tipo da variável
}else{
aprovado = false;
// console.log(aprovado) exibir no console conteúdo da variável
// console.log(typeof(aprovado)) exibir no console tipo da variável
}

if (aprovado === true){
alert("Aprovado")
}else{
alert("Reprovado")
}

//testando negação

aprovado = !aprovado;
console.log(typeof(aprovado));
alert(aprovado);