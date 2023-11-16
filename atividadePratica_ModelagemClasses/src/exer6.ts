class Car {
  constructor(
    private vehicletype: string,
    private vehicleConsumption: number,
    private fuelInTank: number = 0
  ) {}

  get vehicle(): object {
    return {
      tipoDoVeiculo: this.vehicletype,
      consumoDoVeiculo: this.vehicleConsumption,
      quantidadeNoTanque: this.fuelInTank,
    };
  }

  toWalk(kilometerTraveled: number): string {
    const resultWalk = Math.ceil(kilometerTraveled / this.vehicleConsumption);
    this.fuelInTank -= resultWalk;
    return `O veículo rodou ${kilometerTraveled}Km e consumiu o total de ${resultWalk} litros.\nAinda resta no tanque ${this.fuelInTank} litros.`;
  }

  addGasoline(quantifyGasoline: number): string {
    this.fuelInTank += quantifyGasoline;
    return `Foi adicionado ${quantifyGasoline} litros de combustível ao tanque.`;
  }

  getGasoline(): string {
    return `A quantidade de combustível atual é ${this.fuelInTank} litros.`;
  }
}

const myHondaCivic = new Car("Honda Civic", 13);
console.log(myHondaCivic.vehicle);
console.log(myHondaCivic.addGasoline(100));
console.log(myHondaCivic.vehicle);
console.log(myHondaCivic.getGasoline());
console.log(myHondaCivic.toWalk(300));

// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.

// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.
// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()
