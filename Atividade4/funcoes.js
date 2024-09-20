function Pessoa(){
    var nome;
    var email;
    var fixo;
    var celular;
    var data_nascimento;
    this.setnome = function (vnome){
        this.nome = vnome;
    }
    this.getnome = function(){
        return this.getnome;
    }
    this.setemail = function (vemail){
        this.email = vemail;
    }
    this.getemail = function(){
        return this.getemail;
    }
    this.setdata_nascimento = function (vdata_nascimento){
        this.data_nascimento = vdata_nascimento;
    }
    this.getdata_nascimento = function(){
        return this.getdata_nascimento;
    }
    this.setfixo = function (vfixo){
        this.fixo = vfixo;
    }
    this.getfixo = function(){
        return this.getfixo;
    }
    this.setdcelular = function (vcelular){
        this.celular = vcelular;
    }
    this.getcelular = function(){
        return this.getcelular;
    }
    

}

function Professor(){
    var area;
    var lattes;
    this.setarea_atuacao = function (varea_atuacao){
        this.area_atuacao = varea_atuacao;
    }
    this.getarea_atuacao = function(){
        return this.getarea_atuacao;
    }
    this.setlink_lattes = function (vlink_lattes){
        this.link_lattes = vlink_lattes;
    }
    this.getlink_lattes = function(){
        return this.getlink_lattes;
    }
    Pessoa.call(this);
}

function Aluno(){
    var curso;
    this.setcurso = function (vcurso){
        this.curso = vcurso;
    }
    this.getcurso = function(){
        return this.getcurso;
    }
    Pessoa.call(this);
}

function validarNome(nome){
    nome = document.getElementById('nome').value;
    if (nome )
}

function validaremail(nome){
    nome = document.getElementById('nome').value;
    if (nome )
}

function validarNome(nome){
    nome = document.getElementById('nome').value;
    if (nome )
}

function validarNome(nome){
    nome = document.getElementById('nome').value;
    if (nome )
}