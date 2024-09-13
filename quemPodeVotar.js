let idade = Number(prompt("Digite sua idade"));
let isValid = true;

if(isNaN(idade)){
	isValid = false;
}
if(isValid === false){
	alert("Você não digitou um número válido");
}
else if(idade<15){
    alert("Você não pode votar");
} 
else if(idade >= 15 && idade <18){
    alert("Seu voto é opicional");
}
else if(idade>=18 && idade <= 70){
	alert("Seu voto é obrigatório");
}
else{
    alert("Seu voto é opcional");
}