import { Dog, Horse, Cat } from "./class";

const dog = new Dog("CACHORRO", "Canis lupus familiaris", "Canis", "Canídeos");
console.log(dog.emitSound());

const horse = new Horse("CAVALO", "Equus ferus caballus", "Equus", "Equinos");
console.log(horse.emitSound());

const cat = new Cat("GATO", "Felis silvestris catus", "Felis", "Felídeos");
console.log(cat.emitSound());
