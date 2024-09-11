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
    this.setemail = function (vemail){
        this.email = vemail;
    }
    this.getnomeCompleto = function(){
        return this.getemail;
    }
    this.setdata_nascimento = function (vdata_nascimento){
        this.nomeCompleto = vnomeCompleto;
    }
    this.getdata_nascimento = function(){
        return this.getdata_nascimento;
    }
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

function Professor(){
    var area_atuacao;
    var link_lattes;
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
    Pessoa.call(this)
}