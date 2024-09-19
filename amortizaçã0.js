let divida = parseInt(prompt("Digite o valor da dívida"));

while (divida > 0) {
    let descontar = Number(prompt("Digite o valor a ser pago"));
    
    if (descontar > divida) {
        alert(`O valor inserido é maior que sua dívida. Sua dívida atual é de ${divida}.`);
        continue;  
    } else {
        divida = divida - descontar;
        alert(`Sua dívida atual é de ${divida}`);
        document.write(`Descontado: ${descontar}<br>`);
    }
}

alert("Você pagou toda a dívida.");