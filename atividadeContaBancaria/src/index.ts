class AccountBank{
    constructor(private _numberAccount: string, private _balance: number){}

    get account(): string{
        return this._numberAccount
    }

    get balance(): number{
        return this._balance
    }

    set balance(newBalance: number){
        if(newBalance >= 0){
            this._balance += newBalance
        } else{
            console.log("O valor não pode ser negativo.")
        }
    }
}

class AccountHolder extends AccountBank{
    constructor(account: string, balance: number , private _overdraft: number){
        super(account, balance)
    }

    get valueOverdraft(): number{
        return this._overdraft
    }

    set balance(newOverdraft: number){
        if(newOverdraft >= 0){
            this._overdraft += newOverdraft
        } else{
            console.log("O valor não pode ser negativo.")
        }
    }

    useOverdraft(newOverdraft: number): void{
        if(newOverdraft > 0){
            this._overdraft += newOverdraft
            console.log(this._overdraft)
        } else{
            console.log(`Não permite uso do cheque especial.`)
        }
    }
}

class AccountSavings extends AccountBank{
    constructor(account: string, balance: number){
        super(account, balance)
    }

    calculateInterest(rate: number){
        this.balance += this.balance * (rate/100)
        console.log(this.balance.toFixed(2))
    }
}

const accountBank = new AccountBank("1234", 2000)
const accountHolder = new AccountHolder("1234", 1200, 200)
const accountSavings = new AccountSavings("1234", 600)

console.log(accountBank)
accountBank.account
accountBank.balance
accountBank.balance = 300
console.log(accountBank)

console.log(accountHolder)
accountHolder.valueOverdraft
accountHolder.balance = -4
console.log(accountHolder)

console.log(accountSavings)
accountSavings.calculateInterest(2)
console.log(accountSavings)