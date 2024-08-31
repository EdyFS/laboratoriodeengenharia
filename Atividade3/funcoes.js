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
}

//apagar espaço
function apagarCampo(){
    valor = document.getElementById('lista').value;
    valor = document.value('');
}

//ordenar
function ordenarValores(){
    valoresDoUsuario.sort();
}
//exibir array
function exibirValores(){
    document.write(valoresDoUsuario);
}

exibirValores()
//executar
function executar(){
    armazenarValores();
    ordenarValores();
    apagarCampo();
}
