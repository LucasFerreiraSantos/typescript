abstract class Animal {
  constructor(
    protected specie: string,
    protected gender: string,
    protected family: string
  ) {}

  abstract emitSound(): object;
}

class Dog extends Animal {
  constructor(
    public called: string,
    specie: string,
    gender: string,
    family: string
  ) {
    super(specie, gender, family);
  }

  emitSound(): object {
    return {
      called: this.called,
      especie: this.specie,
      genero: this.gender,
      familia: this.family,
      som: "Au Au...",
    };
  }
}

class Horse extends Animal {
  constructor(
    public called: string,
    specie: string,
    gender: string,
    family: string
  ) {
    super(specie, gender, family);
  }

  emitSound(): object {
    return {
      called: this.called,
      especie: this.specie,
      genero: this.gender,
      familia: this.family,
      som: "Iiirrrrí, rilinchin...",
    };
  }
}

class Cat extends Animal {
  constructor(
    public called: string,
    specie: string,
    gender: string,
    family: string
  ) {
    super(specie, gender, family);
  }

  emitSound(): object {
    return {
      called: this.called,
      especie: this.specie,
      genero: this.gender,
      familia: this.family,
      som: "Miau...",
    };
  }
}

const dog = new Dog("CACHORRO", "Canis lupus familiaris", "Canis", "Canídeos");
console.log(dog.emitSound());

const horse = new Horse("CAVALO", "Equus ferus caballus", "Equus", "Equinos");
console.log(horse.emitSound());

const cat = new Cat("GATO", "Felis silvestris catus", "Felis", "Felídeos");
console.log(cat.emitSound());

// // 3. Dado o seguinte diagrama:

//               ANIMAL

//   CACHORRO    CAVALO    GATO

// // Identifique os atributos e comportamentos que são comuns entre os
// // 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// // comportamento diferente para cada animal.
