let multiplicador =1

while(multiplicador<=10){
    document.write(`Tabuada de ${multiplicador}: <br>`)

    let numero = 1;

    while(numero <= 10 ){
        document.write(`${multiplicador} x ${numero} = ${multiplicador*numero} <br>`);
        numero++
    }

    document.write("------------------" + "<br>")
    multiplicador++
}