let idade = Number(prompt("Digite sua Idade"))

if(idade>=0 && idade <= 100){
	    document.write(`Sua idade é: ${idade}`);
}else{
   	while(idade<0 || idade > 100){
	idade = Number(prompt("Idade invalida, digite novamente"))

	}
   	document.write(`Sua idade é: ${idade}`);
}