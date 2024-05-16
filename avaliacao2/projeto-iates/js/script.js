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

