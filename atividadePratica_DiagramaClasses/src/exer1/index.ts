import { Order } from "./class";
import { Items } from "./class";


const order = new Order()
const items = new Items(20, "Sabão", "Em pó")

console.log(order.items)

console.log(order.valueTotal)

items.itemPurchased()

// 1. Implemente e teste o modelo de classes com base na seguinte
// imagem:

// PEDIDO                             ITEM

// + itens: Array<item>               + valor: double
// + valorTotal: double               + nome: String
//                                    + descricao: String
