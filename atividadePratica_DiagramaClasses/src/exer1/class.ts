class Order {
  constructor(private items: Items[] = [], private valueTotal: number = 0) {}
}

class Items {
  constructor(
    private value: number,
    private name: string,
    private description: string
  ) {}

  get valueItem(): number {
    return this.value;
  }

  itemPurchased() {
    console.log(
      `O item ${this.name} no valor de ${this.value}, ${this.description}, adicionado ao pedido.`
    );
  }
}

const items = new Items(20, "Batata", "Com frango.");
