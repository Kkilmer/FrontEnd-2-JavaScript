const formEx = document.getElementById('formEx');
const tabelaTarefas = document.getElementById('tabelaTarefas');

formEx.addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;

    adicionarTarefa(titulo, descricao);

    formEX.reset();
});

function adicionarTarefa(titulo, descricao) {
    const linha = tabelaTarefas.insertRow();

    const celulaTitulo = linha.insertCell();
    const celulaDescricao = linha.insertCell();
    const celulaAcoes = linha.insertCell();

    const textoTitulo = document.createTextNode(titulo);
    const textoDescricao = document.createTextNode(descricao);

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', function() {
        removerTarefa(linha);
    });

    celulaTitulo.appendChild(textoTitulo);
    celulaDescricao.appendChild(textoDescricao);
    celulaAcoes.appendChild(botaoExcluir);
}

function removerTarefa(linha) {
    tabelaTarefas.deleteRow(linha.rowIndex);
}