import { Sender, Transporter } from "./class";

const sender = new Sender("MdiasBranco", 3000, 500);
const transporter = new Transporter("TopTrans", 1.85);

console.log(sender.distance);
transporter.freightDistance(sender.distance);
transporter.freightWeigth(sender.weight);
