let peso = Number(prompt("Digitar peso: "))
let altura = Number(prompt("Digitar altura: "))


let imc = (peso/(altura**2)).toFixed(2); //toFixed(2) define o número de casas decimais 



if(imc<18.5){
    alert("Imc é de " + imc + "\n Abaixo do peso")
}else if(imc >= 18.5 && imc <= 24.9){
    alert("Imc é de " + imc + "\n Peso normal")
}else{
    alert("Imc é de " + imc + "\n Sobrepeso")
}
