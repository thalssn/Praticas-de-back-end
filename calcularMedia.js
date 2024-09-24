let n1, n2, qtdFaltas, media, calculo, aprovado, recuperacao, isValid;
//criação de variáveis em linha única

    
n1 = parseFloat(prompt("Digitar n1"));
n2 = parseFloat(prompt("Digitar n2"));
qtdFaltas = prompt("Digite a quantidade de faltas: ")

//obtencção de dados para os cálculos

media = (n1+n2)/2;
recuperacao = false;
isValid = true;
calculo = media;

//Definição da fórmula de média e dos valores das váriaveis;

console.log(calculo);
console.log(typeof(calculo));

if(isNaN(n1) || isNaN(n2)){ //isNaN serve para verificar se o que foi atribuido as variaveis entre parenteses são números
	isValid = false;
}

if (media >=7 && qtdFaltas <=10){
    aprovado = true;
    //console.log(aprovado) exibir no console conteúdo da variável
    //console.log(typeof(aprovado)) exibir no console tipo da variável

}else if(media>=3 && media < 7 && qtdFaltas <= 10){
    recuperacao = true;
    //console.log(recuperacao) exibir no console conteúdo da variável
    //console.log(typeof(recuperacao)) exibir no console tipo da variável

}else if(media = NaN){
    isValid = false

}else{
    aprovado = false;
    // console.log(aprovado) exibir no console conteúdo da variável
    // console.log(typeof(aprovado)) exibir no console tipo da variável
}

// Primeiro bloco de if else atribui valores booleanos as variáveis

if (aprovado === true){
    alert("Aprovado")
}else if(recuperacao === true){
    alert("Em recuperação")
}else if(isValid === false){
    alert("Você não digitou todos os números necessários. Tente Novamente!")
}else{
    alert("Reprovado");
}

//Segundo bloco de if else mostra por meio do alert por meio das valores das variáveis definidas no bloco anterior

//testando negação

aprovado = !aprovado;
console.log(typeof(aprovado));
alert(aprovado);