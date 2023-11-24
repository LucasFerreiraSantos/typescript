class Order {
  constructor(private _items: Items[] = [], private _valueTotal: number = 0) {}
  get items(): Array<Items> {
    return this._items;
  }

  get valueTotal(): number {
    return this._valueTotal;
  }
}

class Items {
  constructor(
    private _value: number,
    private name: string,
    private description: string
  ) {}

  get value(): number {
    return this._value;
  }

  itemPurchased() {
    console.log(
      `O item ${this.name} no valor de ${this.value}, ${this.description}, adicionado ao pedido.`
    );
  }
}

export { Order, Items }
