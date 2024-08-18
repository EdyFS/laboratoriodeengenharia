let entrada = prompt("Escreva algo: ");
let tipo = prompt("Deseja verificar o tipo do dado informado (S/N)?");
if(tipo == 'S' || tipo == 's'){
    alert(typeof(entrada));
}
else if (tipo == 'N' || tipo == 'n'){
    alert("Obrigado por visitar esta página");
}