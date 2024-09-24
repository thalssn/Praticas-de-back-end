let n1 = parseInt(prompt("Digite o primeiro numero"));
let n2 = parseInt(prompt("Digite o segundo numero"));
let n3 = parseInt(prompt("Digite o terceiro numero"));

//obtendo numeros a partir do prompt

let delta = n2**2 - 4*n1*n3
let x1 = ((-n2) + delta ** (1/2))/2*n1
let x2 = ((-n2) - delta ** (1/2))/2*n1

//formulás para cálculo

if(delta < 0 ){
    alert("Delta não é um numero positivo")
}else{
	delta = n2**2 - 4*n1*n3
	x1 = ((-n2) + delta ** (1/2))/2*n1
	x2 = ((-n2) - delta ** (1/2))/2*n1
    
	alert(`Delta igual a: ${delta}`);
	alert(`X1 é de: ${x1}`);
	alert(`X2 é de: ${x2}`);
}

//Bloco de condições para definir se as raizes devem ou não serem exibidas