//Criar array
let valoresDoUsuario = [];
let valor;
//armazenar valores
function armazenarValores(){
    //valoresDoUsuario = document.getElementById('lista').value;
    valor = document.getElementById('lista').value;
    valoresDoUsuario.push(valor);
    console.log(valoresDoUsuario);
    console.log(valor);
    ordenarValores();
    exibirValores();
    apagarCampo();

}

//apagar espaço
function apagarCampo(){
    valor = document.value('');
}

//ordenar
function ordenarValores(){
    valoresDoUsuario.sort();
}
//exibir array
function exibirValores(){
    valoresDoUsuario.innerHTML;
}
