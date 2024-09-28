class Tarefa{
    constructor (nome, descricao, status){
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'Pendente';
        get nome(){

        }
        set nome(){

        }

        get descricao(){

        }
        set descricao(){

        }

        get status(){

        }

        set status(){

        }

    }
    concluir(){
        this.status = 'Concluída'
    }
    detalhar(){

    }
}

class GerenciadorDeTarefas{
    constructor (){
        arrayTarefas = [];
    }

    adicionarTarefa(tarefa){
        this.arrayTarefas.push(tarefa);
        this.listarTarefas();
    }

    listarTarefas(){
        const lista = document.getElementById('lista');
        lista.innerHTML = '';


    }
    marcarComoConcluida(index){
        this.arrayTarefas[index].concluir();
        this.listarTarefas();
    }
    removerTarefa(index){

    }
    visualizarDetalhes(index){

    }
}