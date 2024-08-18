function determinarPar(numero){
    let numero = parseInt(prompt("Informe um número inteiro positivo: "));
let verificacao = numero % 2;
if (verificacao == 0){
    alert(`O número ${numero} é par`);
}
else{
    alert(`O número ${numero} é ímpar`);
}
}

function determinarPrimo(numero){
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
}

function determinarFatorial(numero){
    let numero = parseInt(prompt("Escreva um número inteiro positivo: "));
let contador = 1;
let fatorial = 1;
while(contador <= numero){
    fatorial = fatorial * contador;
    contador ++;
}
alert(`O fatorial é ${fatorial}`);
}

function determinarTipo(){
    let entrada = prompt("Escreva algo: ");
let tipo = prompt("Deseja verificar o tipo do dado informado (S/N)?");
if(tipo == 'S' || tipo == 's'){
    alert(typeof(entrada));
}
else if (tipo == 'N' || tipo == 'n'){
    alert("Obrigado por visitar esta página");
}
}