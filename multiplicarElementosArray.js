let originais = [];
let multiplicados = []

for(i=0; i<5; i++){
    originais.push(Number(prompt('Digite numeros')));
}

for(i=0; i<originais.length; i++){
    multiplicados.push(originais[i]*2)
}

document.write(originais)
document.write(multiplicados)