let numero = parseInt(prompt("Escreva um número inteiro positivo: "));
let contador = 1;
let fatorial = 1;
while(contador <= numero){
    fatorial = fatorial * contador;
    contador ++;
}
alert(`O fatorial é ${fatorial}`);