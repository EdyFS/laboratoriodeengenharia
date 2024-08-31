//Criar array
let valoresDoUsuario = [];
let valor;
//armazenar valores
function armazenarValores(){
    //valoresDoUsuario = document.getElementById('lista').value;
    valor = document.getElementById('lista').value;
    valoresDoUsuario.push(valor); //adicionar os valores à lista
    valoresDoUsuario.sort(); //ordenar os valores
    //console.log(valoresDoUsuario);
    //console.log(valor);
    return valoresDoUsuario;
}

//apagar espaço
function apagarCampo(){
    /*valor = document.getElementById('lista').value;
    valor.value = '';*/
    document.getElementById('lista').value = '';
}

/*ordenar
function ordenarValores(){
    valoresDoUsuario.sort();
    return valoresDoUsuario;
}
    */

//exibir array
function exibirValores(){
    let listaPronta = document.getElementById('listaPronta');
            listaPronta.innerHTML = ''; // limpar a lista antes de exibir os novos valores

            valoresDoUsuario.forEach(function(valor){
                let li = document.createElement('li');
                li.textContent = valor;
                listaPronta.appendChild(li);
            });
}

//executar
function executar(event){
    event.preventDefault();
    armazenarValores();
    apagarCampo();
    exibirValores();
}


