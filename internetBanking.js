let escolha = parseInt(prompt("Internet baking v1.0 \n Escolha sua opção \n \n 1 - Saldo \n 2 - Extrato \n 3 - Transaferência \n 4 - Sair"));

let saldo = 1000;

switch(escolha){
   case 1:
       alert(`Seu saldo é de: R$${saldo}`);
       break;
   case 2:
       alert("Função de extrato ainda não disponivel");
       break;
   case 3:
       let t1 = parseInt(prompt("Digite a conta: \n "));
       let t2 = parseInt(prompt("Digite a agencia: \n"));
       let valor = Number(prompt("Digite o valor: "));

       if(valor > saldo){
           alert("Saldo insuficiente, saldo : R$" + saldo)
       } else{
           saldo = saldo - valor;   
           alert(`Transferindo o valor de R$ ${valor}, para a conta ${t1}, agência ${t2}.\n\nSaldo restante: R$${saldo}`);
       }
       break;
   case 4:
       alert("Encerrando internet baking");
       break;  
}