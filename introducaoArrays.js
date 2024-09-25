//TRABALHANDO COM ARRAYS

const alunos = ['Will', 'Gio', 'Rafael']
console.log(alunos);

console.clear();

alunos.unshift('Thalisson') //insere no inicio do array
console.log(alunos);

alunos.push('Victor') //insere no final do array
console.log(alunos);

alunos.shift(); //remove o primeiro indice do array
console.log(alunos);

alunos.pop(); //remove o ultimo indice do array
console.log(alunos);

alunos[4] = 'Marcos'
alunos[0] = 'Luana' //adiciona no array na posição especificada dentro do colchetes
console.log(alunos.length);

delete alunos[2]; //deleta o conteudo no índice especificado, mas não remove o índice
console.log(alunos);

alunos[2] = "Victor"
alunos[3] = "Felipe"

console.log(alunos.sort()) //Organiza em ordem crescente

console.log(alunos instanceof Array); //para saber se uma variável é um array

alunos.concat(['Fernando', 'Gabriel']);
console.log(alunos);

let professores = ["Douglas", "Weskley"];
let senac = alunos.concat(professores); //junta dois arrays
console.log(senac);

console.log(senac.slice(0,3)) //Deixa de exibir o intervalo

senac.splice(4) //remove itens e deixa o restante

console.log(senac.reverse) //inverte a aordem

let numeros = [1, 2, 3, 4, 5]
console.log(numeros.join(" ")) // transforma em strings

for(let i = 0; i<senac.length; i++){ //percorre o array e exibe cada indice em uma nova linha
    console.log(senac[i])
}