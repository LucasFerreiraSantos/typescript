import { Pessoa } from "./types"
import { Documento } from "./types"
import { EnderecoTelefone } from "./types"

const pessoa1: Pessoa = {
    nome: "Lucas",
    idade: 25,
    email: "@gmail.com"
}

const pessoa2: Pessoa = {
    nome: "Renan",
    idade: 21,
    telefones: ["99999-9999", "00000-0000"]
}

const documento1: Documento = {
    rg: 1234,
    nomeCompleto: "Lucas Ferreira",
    possuiCNH: false
}

const enderecoPessoa: EnderecoTelefone = {
    rua: "São Luiz",
    cidade: "Viana",
    telefone: 988490384
}

console.log(pessoa1, pessoa2, documento1, enderecoPessoa)

// Crie um arquivo TypeScript (com extensão .ts) para realizar a atividade.
// Defina um tipo ou interface chamado Pessoa que represente uma pessoa com as seguintes propriedades:
// nome (string)
// idade (number)
// email (string, opcional)
// telefones (array de strings, opcional)
// Crie uma variável chamada pessoa1 que seja do tipo Pessoa e represente uma pessoa com nome, idade e email.
// Crie uma variável chamada pessoa2 que seja do tipo Pessoa e represente uma pessoa com nome, idade e telefones.
// Defina um tipo chamado Documento que seja uma união de tipos primitivos (string, number, boolean) para representar diferentes tipos de documentos.
// Crie uma variável chamada documento1 que seja do tipo Documento e atribua a ela um número.
// Crie uma variável chamada documento2 que seja do tipo Documento e atribua a ela uma string.
// Defina um tipo chamado Endereco que tenha propriedades rua (string) e cidade (string).
// Crie um tipo chamado Telefone que tenha uma propriedade telefone (string).
// Crie um tipo chamado EnderecoTelefone que seja uma interseção de Endereco e Telefone.