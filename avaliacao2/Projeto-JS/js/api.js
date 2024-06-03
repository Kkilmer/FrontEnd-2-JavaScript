function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}
function addMsg(){
    var campoNome = document.getElementById("nome").value;
    var campoEmail = document.getElementById("email").value;
    var campoMensagem = document.getElementById("msg").value;

    var mensagem = {
        nome: campoNome,
        email: campoEmail,
        mensagem: campoMensagem};

    inserirMensagem(mensagem);
    alert("Mensagem inserida com sucesso");
}
function listarMensagem(){
    var mensagens = obterMensagens();
    var tabela = $("#tabela tbody");

    $.each(mensagens,function(index,mensagem){
        var linha = '<tr>'+
        '<td>'+ mensagem.id + '</td>' +
        '<td>'+ mensagem.nome + '</td>' +
        '<td>'+ mensagem.email + '</td>' +
        '<td>'+ mensagem.mensagem + '</td>' +
        '</tr>';
        tabela.append(linha)
    });


}
function inserirMensagem(mensagem) {

    var inserir = $.ajax({

        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });
}

function validarUsuario() {


    var objLoginSenha = {
            email: $("#email").val(), 
            senha: $("#senha").val()} 

    var retorno = false;

    var validacao = $.ajax({
        url: 'https://app-uniesp-p2-b8d2992ac568.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
                },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(){
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
    });

    if (retorno){
        window.location.href="mensagem.html"
    } else {
        alert("Login ou senha incorrete.")
    }

    return retorno;
}