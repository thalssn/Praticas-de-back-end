let nota = prompt("digite nota");
let conceito; 

nota = Math.floor(nota/10);
alert(nota);

switch(nota){
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