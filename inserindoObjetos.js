const carro = {
    marca: prompt("Qual marca do carro? "),
    categoria: prompt("Qual ategoria do carro? "),
    ano: Number(prompt("Qual ano do carro? ")),
    cor: prompt("Qual cor do carro? "),
    motor:prompt("Qual tipo de motor do carro? "),
}

//condição para grantir que o ano sempre será numero

if(isNaN(carro.ano)){
	carro.ano = Number(prompt("Ano inválido. Digite apenas numeros"))
}