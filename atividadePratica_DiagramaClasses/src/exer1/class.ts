class Order {
  constructor(public items: Items[] = [], public valueTotal: number = 0) {}
}

class Items {
  constructor(
    public value: number,
    public name: string,
    public description: string
  ) {}
}

export { Order, Items };
