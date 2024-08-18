let numero = parseInt(prompt("Informe um número inteiro positivo: "));
let verificacao = numero % 2;
if (verificacao == 0){
    alert(`O número ${numero} é par`);
}
else{
    alert(`O número ${numero} é ímpar`);
}