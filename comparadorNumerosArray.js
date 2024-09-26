let numeros = [];
let limite = Number(prompt('Digitar numero'));
let contador = 0;

for(let i=0;i<15;i++){
    let numero = Number(prompt("Digite numero "));
    numeros.push(numero)

    if(numero>limite){
        document.write(`Os numeros maiores que ${limite} são: ${numero} <br>`)
        contador++
    }
   
}
document.write(`A quantidade de numeros é:  ${contador}`)