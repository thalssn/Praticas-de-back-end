let n1, n2, qtdFaltas, media, calculo, aprovado, recuperacao;

    
n1 = parseFloat(prompt("Digitar n1"));
n2 = parseFloat(prompt("Digitar n2"));
qtdFaltas = prompt("Digite a quantidade de faltas: ")

media = (n1+n2)/2;
recuperacao = false;

//console.log(media);

calculo = media;

console.log(calculo);
console.log(typeof(calculo));

if (media >=7 && qtdFaltas <=10){
    aprovado = true;
    //console.log(aprovado) exibir no console conteúdo da variável
    //console.log(typeof(aprovado)) exibir no console tipo da variável
}else if(media>=3 && media < 7 && qtdFaltas <= 10){
    recuperacao = true;
    // console.log(aprovado) exibir no console conteúdo da variável
    // console.log(typeof(aprovado)) exibir no console tipo da variável
}else{
    aprovado = false;
}

if (aprovado === true){
    alert("Aprovado")
}else if(recuperacao === true){
    alert("Em recuperação")
}else{
    alert("Reprovado")
}

//testando negação

aprovado = !aprovado;
console.log(typeof(aprovado));
alert(aprovado);