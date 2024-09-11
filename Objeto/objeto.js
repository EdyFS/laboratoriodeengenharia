function Pessoa(){
    var nome;
    var sobrenome;
    var email;
    var data_nascimento
    this.setnomeCompleto = function (vnomeCompleto){
        this.nomeCompleto = vnomeCompleto;
    }
    this.getnomeCompleto = function(){
        return this.getnomeCompleto;
    }
}

function Aluno(){
    var curso;
    Pessoa.call(this);
}

function Professor(){
    var area_atuacao;
    var link_lattes;
    Pessoa.call(this)
}