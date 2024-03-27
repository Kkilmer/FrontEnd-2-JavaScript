var aluno = {
    nome: "Kevin",
    idade: 23,
    filiacao: ["Kiades Kelson: Pai", "Livia Alves: Mae"],
    endereco:{
        rua: "Joao Agripino de Almeida",
        cidade: "Joao Pessoa",
        estado: "Paraiba",
    },
    dadosCompletos: function(){
        if(
            this.nome &&
            this.idade &&
            this.filiacao[0] &&
            this.filiacao[1] &&
            this.endereco.rua &&
            this.endereco.cidade &&
            this.endereco.estado
            ){
            return true
        }else{
            return false
        }
    }
};
var completos = aluno.dadosCompletos();
if (completos){
    console.log("Campo todo completo!");
}else{
    console.log("Preencha todos os campos!");
}