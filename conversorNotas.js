let nota = prompt("digite nota");
let conceito; 

nota = Math.floor(nota/10); //Math.floor arrendonda o numero da variável
alert(nota);

switch(nota){   // com base no valor da variável nota o switch case atribui novos valores a variável conceito 
	case 10:
    	conceito = 'A'
        alert(conceito);
        break
    case 9:
        conceito = 'A'
        alert(conceito)
        break
    case 8:
        conceito = 'B'
        alert(conceito)
        break
    case 7:
        conceito = 'C'
        alert(conceito)
        break
    case 6:
        conceito = 'D'
        alert(conceito)
        break
    case 5:
        conceito = 'E'
        alert(conceito);
        break
    default:
        conceito = 'F';
        alert(conceito)
        break
}

//Após atribuir novos valores a variável conceito o bloco exibe por meio do alert