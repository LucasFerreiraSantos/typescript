class Accountant {
    private accountant: number;
    constructor(){
        this.accountant = 0
    }

    reset(): void {
        this.accountant = 0
    }

    increment(): void {
        this.accountant++;
    };

    turnBack(): number {
        return this.accountant;
    };
}

let accountant = new Accountant();

console.log(accountant.turnBack())

accountant.increment()
accountant.increment()

console.log(accountant.turnBack())

console.log(accountant.reset())


// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.