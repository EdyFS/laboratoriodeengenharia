let numero = parseInt(prompt("Escreva um número inteiro positivo: "));
let divisor = 1;
let numeroDeZeros = 0;
while(divisor <= numero){
    let divisao = numero % divisor;
    if (divisao == 0){
        numeroDeZeros++
    }
    divisor++;
}
if (numeroDeZeros == 2){
    alert(`O número ${numero} é primo`);
}
else{
    alert(`O número ${numero} não é primo`);
}
