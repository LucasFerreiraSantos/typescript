class Immobile {
  constructor(public address: string, public price: number) {}
}

class ImmobileNew extends Immobile {
  constructor(addressNewImmobile: string, priceNewImmobile: number) {
    super(addressNewImmobile, priceNewImmobile);
  }

  addPriceNewImmobile(newValue: number): string {
    const newValueImmobile = (this.price += newValue);
    return `Um imóvel novo possui um adicional de R$${newValue.toFixed(
      2
    )}, por isso o valor atual do imóvel passa a ser R$${newValueImmobile.toFixed(
      2
    )}.`;
  }
}

class ImmobileOld extends Immobile {
  constructor(addressOldImmobile: string, priceOldImmobile: number) {
    super(addressOldImmobile, priceOldImmobile);
  }

  discountPriceOldImmobile(newValue: number): string {
    const newValueImmobile = (this.price -= newValue);
    return `Um imóvel velho possui um desconto de R$${newValue.toFixed(
      2
    )}, por isso o valor atual do imóvel passa a ser R$${newValueImmobile.toFixed(
      2
    )}.`;
  }
}

const immobileNew = new ImmobileNew("São Paulo", 200000);
console.log(immobileNew.addPriceNewImmobile(50000));

const immobileOld = new ImmobileOld("Vitória", 150000);
console.log(immobileOld.discountPriceOldImmobile(40000));

// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.
