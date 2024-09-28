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

            const detalhesBtn = document.createElement('button');
            detalhesBtn.textContent = 'Ver Detalhes';
            detalhesBtn.onclick = () => alert(tarefa.detalhar());

            const concluirBtn = document.createElement('button');
            concluirBtn.textContent = 'Concluir Tarefa';
            concluirBtn.onclick = () => {
                this.marcarComoConcluida(index);
            };

            const removerBtn = document.createElement('button');
            removerBtn.textContent = 'Remover Tarefa';
            removerBtn.onclick = () => {
                this.removerTarefa(index);
            };

            li.appendChild(detalhesBtn);
            li.appendChild(concluirBtn);
            li.appendChild(removerBtn);
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