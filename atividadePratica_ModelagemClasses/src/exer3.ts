class AccountBank {
    constructor(public accountNumber: number, public name: string, public _balance?: number){}

    get valueBalance(){
        return this._balance = 0
    }

    set valueBalance(newBalance: number){
        if(newBalance >= 0){
            this._balance += newBalance
        } else{
            console.log(`O valor ${newBalance.toFixed(2)} é negativo e não pode ser adicionado ao saldo.`)
        }
    }

    changeName(newName: string){
        this.name = newName
    }

    deposit(newDeposit: number){
        if(newDeposit <= 0){
            console.log(`O depósito é negativo, por isso não é válido.`)
        } else{
            this._balance += newDeposit
        }
    }

    withdraw(newWithdraw: number){
        if(newWithdraw > this._balance){
            console.log(`O saldo é insuficiente. Saldo: ${this._balance.toFixed(2)}`)
        } else{
            this._balance -= newWithdraw
        }
    }   
}

const accountBank = new AccountBank(1234, "Lucas")

console.log(accountBank)
accountBank.valueBalance
console.log(accountBank)
accountBank.valueBalance = 300
console.log(accountBank)
accountBank.changeName("Rebeca")
console.log(accountBank)
accountBank.deposit(800)
console.log(accountBank)
accountBank.withdraw(200)
console.log(accountBank)

// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.