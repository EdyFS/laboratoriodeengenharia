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
    const erroNome = document.getElementById('erroNome');
    if (!validacao.test(nome)){
        erroNome.textContent = "Nome inválido";
        return false;
    }
    erroNome.textContent = '';
    return true;
}

function validarEmail(email){
    email = document.getElementById('email').value;
    let validacao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const erroEmail = document.getElementById('erroEmail');
    if (!validacao.test(email)){
        //document.getElementById("email").innerHTML = "Email inválido";
        erroEmail.textContent = "Email inválido.";
        return false;
    }
    erroEmail.textContent = '';
    return true;
}

function validarDataNascimento(dataNascimento){
    dataNascimento = document.getElementById('dataNascimento').value;
    let validacao = /^\d{2}\/\d{2}\/\d{4}$/;
    const erroDataNascimento = document.getElementById('erroDataNascimento')
    if (!validacao.test(dataNascimento)){
        erroDataNascimento.textContent = "Data de nascimento inválida. Use o formato dd/mm/aaaa.";
        return false;
    }
    erroDataNascimento.textContent = '';
    return true;
}

function validarFixo(fixo){
    fixo = document.getElementById('fixo').value;
    let validacao = /^\(\d{2}\)\d{4}-\d{4}$/;
    const erroFixo = document.getElementById('erroFixo');
    if (!validacao.test(fixo)){
        erroFixo.textContent = "Telefone fixo inválido. Use o formato (xx)xxxx-xxxx.";
        return false;
    }
    erroFixo.textContent = '';
    return true;
}

function validarCelular(celular){
    celular = document.getElementById('celular').value;
    let validacao = /^\(\d{2}\)\d{5}-\d{4}$/;
    const erroCelular = document.getElementById('erroCelular');
    if (!validacao.test(celular)){
        erroCelular.textContent = "Telefone celular inválido. Use o formato (xx)xxxxx-xxxx.";
        return false;
    }
    erroCelular.textContent = '';
    return true;
}

function validarArea(area){
    area = document.getElementById('area').value;
    const erroArea = document.getElementById('erroArea');
    if (area === '') {
        erroArea.textContent = "Área de atuação é obrigatória.";
        return false;
    }
    erroArea.textContent = '';
    return true;
}

function validarLattes(lattes){
    lattes = document.getElementById('lattes').value;
    const erroLattes = document.getElementById('erroCurriculoLattes');
    if (lattes === '') {
        erroLattes.textContent = "Currículo Lattes é obrigatório.";
        return false;
    }
    erroLattes.textContent = '';
    return true;
}

function validarMatriculaProfessor(matriculaProfessor){
    matriculaProfessor = document.getElementById('matriculaProfessor').value;
    const erroMatriculaProfessor = document.getElementById('erroMatriculaProfessor');
    if (matriculaProfessor.length !== 5) {
        erroMatriculaProfessor.textContent = "Matrícula de professor deve ter 5 dígitos.";
        return false;
    }
    erroMatriculaProfessor.textContent = '';
    return true;
}

function validarCurso(curso){
    curso = document.getElementById('curso').value;
    const erroCurso = document.getElementById('erroCurso');
    if (curso === '') {
        erroCurso.textContent = "Curso é obrigatório.";
        return false;
    }
    erroCurso.textContent = '';
    return true;
}

function validarMatriculaAluno(matriculaAluno){
    matriculaAluno = document.getElementById('matriculaAluno').value;
    const erroMatriculaAluno = document.getElementById('erroMatriculaAluno');
    if (matriculaAluno.length !== 10) {
        erroMatriculaAluno.textContent = "Matrícula de aluno deve ter 10 dígitos.";
        return false;
    }
    erroMatriculaAluno.textContent = '';
    return true;
}

f/*unction escolherTipo(){
    let tipo = document.getElementById('tipos').value;
    let camposAluno = document.getElementById('camposAluno');
    let camposProfessor = document.getElementById('camposProfessor');

    camposAluno.classList.add("hidden");
    camposProfessor.classList.add("hidden");

    if (tipo === 'Aluno'){
        camposAluno.classList.remove("hidden");    
    }
    elif (tipo === 'Professor'){
        camposProfessor.classList.remove("hidden");
    }
}*/

function validarFormulario(event) {
    event.preventDefault();

    const tipo = document.getElementById('tipo').value;
    let valid = validarNome() && validarEmail() && validarDataNascimento() && validarTelefoneFixo() && validarTelefoneCelular();

    if (tipo === 'Aluno') {
        valid = valid && validarCurso() && validarMatriculaAluno();
    } else if (tipo === 'Professor') {
        valid = valid && validarAreaAtuacao() && validarCurriculoLattes() && validarMatriculaProfessor();
    }

    if (valid) {
        let pessoa;
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const telefoneFixo = document.getElementById('telefoneFixo').value;
        const telefoneCelular = document.getElementById('telefoneCelular').value;

        if (tipo === 'aluno') {
            const curso = document.getElementById('curso').value;
            const matriculaAluno = document.getElementById('matriculaAluno').value;
            pessoa = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, curso, matriculaAluno);
        } else if (tipo === 'professor') {
            const areaAtuacao = document.getElementById('areaAtuacao').value;
            const curriculoLattes = document.getElementById('curriculoLattes').value;
            const matriculaProfessor = document.getElementById('matriculaProfessor').value;
            pessoa = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, areaAtuacao, curriculoLattes, matriculaProfessor);
        }

        console.log(pessoa);
        alert('Formulário válido e dados salvos com sucesso!');
    }
}

function formatarTelefone(input) {
    const valor = input.value.replace(/\D/g, '');
    if (valor.length <= 10) {
        input.value = valor.replace(/^(\d{2})(\d{4})(\d+)/, '($1)$2-$3');
    } else {
        input.value = valor.replace(/^(\d{2})(\d{5})(\d+)/, '($1)$2-$3');
    }
}