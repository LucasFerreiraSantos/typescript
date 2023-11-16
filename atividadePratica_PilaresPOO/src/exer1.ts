abstract class Ticket {
  constructor(private value: number) {}

  get printValue(): string {
    return `O valor do ingresso é R$${this.value.toFixed(2)}.`;
  }
}

class Normal extends Ticket {
  constructor(private valueNormal: number) {
    super(valueNormal);
  }

  get printValueNormal(): string {
    return `O valor do ingresso é R$${this.valueNormal.toFixed(2)}.`;
  }
}

class Vip extends Ticket {
  constructor(private valueVip: number) {
    super(valueVip);
  }

  get printValueVip(): string {
    return `O valor do ingresso é R$${this.valueVip.toFixed(
      2
    )}, com o adicional de VIP (R$30,00), passa a ser R$${(
      this.valueVip + 30
    ).toFixed(2)}.`;
  }
}

class Cabin extends Ticket {
  constructor(private valueCabin: number) {
    super(valueCabin);
  }

  get printValueCabin(): string {
    return `O valor do ingresso é R$${this.valueCabin.toFixed(
      2
    )}, com o adicional de CAMAROTE (R$50,00), passa a ser R$${(
      this.valueCabin + 50
    ).toFixed(2)}.`;
  }
}

const ticketNormal = new Normal(10);
console.log(ticketNormal.printValue);

const ticketVip = new Vip(10);
console.log(ticketVip.printValueVip);

const ticketCabin = new Cabin(10);
console.log(ticketCabin.printValueCabin);

// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.
