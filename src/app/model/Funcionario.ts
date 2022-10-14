export class Funcionario {
    
    id!: number
    cpf!: string
    nome!: string
    idade!: number
    endereco!: string
    telefone!: string
    turno!: string
    funcao!: string
    salario!: string

    constructor(id: number, cpf: string, nome: string, idade: number, endereco: string, telefone: string, turno: string, funcao: string, salario: string) {

        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.telefone = telefone;
        this.turno = turno;
        this.funcao = funcao;
        this.salario = salario;
    }



}