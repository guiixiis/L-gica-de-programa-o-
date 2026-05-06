const prompt = require ('prompt-sync') ();
class Pessoa{
    constructor(nome,idade,sexo,dataDeNascimento){
        if (nome === undefined){
        throw new Error("O nome é obrigatório");
    }else {
        this.nome = nome;
    }
    this.idade = idade;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
    }
    apresentar(){
        console.log("Olá meu nome é",this.nome,"eu tenho",this.idade,"anos" )
    }
    static tipo(){
        console.log("Função estatica");
    }
}
const pessoa1 = new Pessoa("Ana",30,"Feminino","1994-05-07");
pessoa1.apresentar();
Pessoa.tipo();