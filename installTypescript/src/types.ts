export type Pessoa = {
    nome: string,
    idade: number,
    email?: string,
    telefones?: string[]
}

export type Documento = {
    rg: number,
    nomeCompleto: string,
    possuiCNH: boolean
}

type Enderecos = {
    rua: string,
    cidade: string
}

type Telefones = {
    telefone: number
}

export interface EnderecoTelefone extends Enderecos, Telefones {}