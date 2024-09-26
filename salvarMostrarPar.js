let contador = 0;
let array = [];

for(i=0; i<10; i++){
    array.push(Number(prompt('Digitar numero')));
    if(array[i]%2 === 0 && array[i] != 0){
        document.write(`${array[i]} é par <br>`)
        contador++
    }
}
    document.write(`${contador} números pares <br>`)
    document.write(`Dados salvos no array: ${array} <br>`);