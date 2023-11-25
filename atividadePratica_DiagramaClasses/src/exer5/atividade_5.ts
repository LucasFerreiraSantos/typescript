class Pedido implements ItemPedido {
  public itens: ItemPedido[] = [];
  constructor(
    public valor: number,
    public nome: string,
    public quantidade: number
  ) {
    this.itens;
  }

  add(item: ItemPedido): void {
    this.itens.push(item);
    console.log("Pedido adicionado!");
  }

  recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }

  aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    let descontoEmPorcentagem: number = 0;
    this.itens.forEach((item) => {
      descontoEmPorcentagem += item.valor * porcentagem;
    });
    console.log(descontoEmPorcentagem);
    const newValue: number = this.valor - descontoEmPorcentagem;
    console.log(newValue);
  }

  aplicarDescontoEmReais(desconto: number): void {
    let descontoEmReais: number = 0;
    this.itens.forEach((item) => {
      descontoEmReais += item.valor - desconto;
    });
    const newValue: number = this.valor - descontoEmReais;
    console.log(`O valor com o desconto fica ${newValue.toFixed(2)}.`);
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
      console.log(item + ` foi removido.`);
    } else {
      console.log(`Item não encontrado.`);
    }
  }
}

class ItemPedido {
  constructor(
    public valor: number,
    public nome: string,
    public quantidade: number
  ) {}

  recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }

  aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }
}

const pedido = new Pedido(10, "Batata", 1);
const itemPedido = new ItemPedido(10, "Batata", 1);
const itemPedido1 = new ItemPedido(20, "Batata", 1);

pedido.add(itemPedido);
pedido.add(itemPedido1);
console.log(pedido.recuperarValorTotal());
pedido.aplicarDescontoEmPorcentagem(80);
pedido.aplicarDescontoEmReais(10);
pedido.removeItem("Batata");
