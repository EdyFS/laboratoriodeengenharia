class Tarefa{
    constructor (nome, descricao){
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'Pendente';
        
        /*get nome(){
            return this._nome;
        }
        set nome(valor){
            this._nome = valor;
        }

        get descricao(){
            return this._descricao;
        }
        set descricao(valor){
            this._descricao = valor
        }*/

    }
    
    concluir(){
        this.status = 'Concluída'
    }
    
    detalhar(){
        return (`Nome: ${this.nome}, Descrição: ${this.descricao}, Status: ${this.status}`);
    }
}

class GerenciadorDeTarefas{
    constructor (){
        this._arrayTarefas = [];
    }

    adicionarTarefa(tarefa){
        this._arrayTarefas.push(tarefa);
        this.listarTarefas();
    }

    listarTarefas(){
        const lista = document.getElementById('listaDeTarefas');
        lista.innerHTML = '';

        this._arrayTarefas.forEach((tarefa, index) => {
            const li = document.createElement('li');
            li.textContent = tarefa.nome;

            const botaoDetalhes = document.createElement('button');
            botaoDetalhes.textContent = 'Detalhes';
            botaoDetalhes.classList.add('detalhes');
            botaoDetalhes.onclick = () => alert(tarefa.detalhar());

            const botaoConcluir = document.createElement('button');
            botaoConcluir.textContent = 'Concluir';
            botaoConcluir.classList.add('concluir');
            botaoConcluir.onclick = () => {
                this.marcarComoConcluida(index);
            };

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.classList.add('remover');
            botaoRemover.onclick = () => {
                this.removerTarefa(index);
            };

            li.appendChild(botaoDetalhes);
            li.appendChild(botaoConcluir);
            li.appendChild(botaoRemover);
            lista.appendChild(li);
        });
    }

    marcarComoConcluida(index){
        this._arrayTarefas[index].concluir();
        this.listarTarefas();
    }

    removerTarefa(index){
        this._arrayTarefas.splice(index, 1);
        this.listarTarefas();
    }
    
    visualizarDetalhes(index){
        alert(this._arrayTarefas[index].detalhes());
    }
}

// Instanciação
const gerenciador = new GerenciadorDeTarefas();


document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const descricao = document.getElementById('descricao').value.trim();

    if (nome && descricao) {
        const tarefa = new Tarefa(nome, descricao);
        gerenciador.adicionarTarefa(tarefa);
        document.getElementById('formulario').reset();
    }
});