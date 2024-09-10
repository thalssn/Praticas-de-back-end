let nomeCompleto = prompt("Digite seu nome completo");
let controle; 
let primeiroNome;

function separarNome(){
	 controle = nomeCompleto.split(' ');
     primeiroNome = controle.slice(0, 1);
     alert(`Olá, ${primeiroNome}`)    
}

separarNome()