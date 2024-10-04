//Parametro -> Informação Externa
//Argumento -> Valor informado pelo usuário
//Retorno   -> Entrega do resultado, um produto que precisa ser retornado

function fazerPizza(tipoDeQueijo, tipoDoRecheio){
    const pizza = `pizza de ${tipoDeQueijo} e ${tipoDoRecheio}`;
    return pizza;
}

const pizzaDoCliente = fazerPizza('mussarela', 'frango');

console.log(`Sua pizza de ${pizzaDoCliente} está a caminho`);