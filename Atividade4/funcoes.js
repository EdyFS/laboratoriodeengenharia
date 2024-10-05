function Pessoa(){
    var nome;
    var email;
    var fixo;
    var celular;
    var dataNascimento;
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

    this.setdataNascimento = function (vdatNascimento){
        this.dataNascimento = vdataNascimento;
    }
    this.getdata_nascimento = function(){
        return this.getdataNascimento;
    }

    this.setfixo = function (vfixo){
        this.fixo = vfixo;
    }
    this.getfixo = function(){
        return this.getfixo;
    }

    this.setcelular = function (vcelular){
        this.celular = vcelular;
    }
    this.getcelular = function(){
        return this.getcelular;
    }
}

function Professor(){
    var area;
    var lattes;
    var matriculaProfessor;
    this.setarea = function (varea){
        this.area = varea;
    }
    this.getarea = function(){
        return this.getarea;
    }

    this.setlattes = function (vlattes){
        this.lattes = vlattes;
    }
    this.getlattes = function(){
        return this.getlattes;
    }
    this.setmatriculaProfessor = function (vmatriculaProfessor){
        this.matriculaProfessor = vmatriculaProfessor;
    }
    this.getmatriculaProfessor = function(){
        return this.getmatriculaProfessor;
    }
    Pessoa.call(this);
}

function Aluno(){
    var curso;
    var matriculaAluno;
    this.setcurso = function (vcurso){
        this.curso = vcurso;
    }
    this.getcurso = function(){
        return this.getcurso;
    }
    this.setmatriculaAluno = function (vmatriculaAluno){
        this.matriculaAluno = vmatriculaAluno;
    }
    this.getmatriculaAluno = function(){
        return this.getmatriculaAluno;
    }
    Pessoa.call(this);
}

function validarNome(nome){
    nome = document.getElementById('nome').value;
    let validacao = /^[a-zA-Z]+\s+[a-zA-Z]+$/;
    if (!validacao.test(nome)){
        document.getElementById("nome").innerHTML = "Nome inválido";
    }
    
}

function validarEmail(email){
    email = document.getElementById('email').value;
    let validacao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!validacao.test(email)){
        document.getElementById("email").innerHTML = "Email inválido";
    }
}

function validarDataNascimento(dataNascimento){
    dataNascimento = document.getElementById('dataNascimento').value;
    let validacao = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!validacao.test(dataNascimento)){
        document.getElementById("dataNascimento").innerHTML = "Data inválida"
    }
}

function validarFixo(fixo){
    fixo = document.getElementById('fixo').value;
    let validacao = /^\(\d{2}\)\d{4}-\d{4}$/;
    if (!validacao.test(fixo)){
        document.getElementById("fixo").innerHTML = "Telefone fixo inválido"
    }
}

function validarCelular(celular){
    celular = document.getElementById('celular').value;
    let validacao = /^\(\d{2}\)\d{5}-\d{4}$/;
    if (!validacao.test(celular)){
        document.getElementById("celular").innerHTML = "Telefone celular inválido"
    }
}

function validarArea(area){
    area = document.getElementById('area').value;
    if (area === ''){
        document.getElementById("area").innerHTML = "Campo obrigatório"
    }
}

function validarLattes(lattes){
    lattes = document.getElementById('lattes').value;
    if (lattes === ''){
        document.getElementById("lattes").innerHTML = "Campo obrigatório"
    }
}

function validarMatriculaProfessor(matriculaProfessor){
    matriculaProfessor = document.getElementById('matriculaProfessor').value;
    if (matriculaProfessor != 5){
        document.getElementById("matriculaProfessor").innerHTML = "Matrícula inválida"
    }
}

function validarCurso(curso){
    curso = document.getElementById('curso').value;
    if (curso === ''){
        document.getElementById("curso").innerHTML = "Campo obrigatório"
    }
}

function validarMatriculaAluno(matriculaAluno){
    matriculaAluno = document.getElementById('matriculaAluno').value;
    if (matriculaAluno != 10){
        document.getElementById("matriculaAluno").innerHTML = "Matrícula inválida"
    }
}

function escolherTipo(){
    let tipo = document.getElementById('tipos').value;
    if (tipo === 'aluno'){

    }
    elif (tipo === 'professor'){
        
    }
}