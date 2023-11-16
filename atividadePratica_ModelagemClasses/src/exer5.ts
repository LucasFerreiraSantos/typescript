class FuelPump {
  constructor(
    private typeFuel: string,
    private valueLiter: number,
    private amountFuel: number
  ) {}

  get gasStation(): object {
    return {
      tipoCombustivel: this.typeFuel,
      valorDoLitro: this.valueLiter,
      totalBomba: this.amountFuel,
    };
  }

  supplyByValue(valueSupplied: number): string {
    const resultValue: number = valueSupplied / this.valueLiter;
    this.amountFuel -= resultValue;
    if (this.amountFuel >= Math.ceil(resultValue)) {
      return `O valor a ser abastecido é ${valueSupplied.toFixed(
        2
      )} e a quantidade de litros abastecidos é ${Math.ceil(resultValue)}.`;
    } else {
      return `Não há combustível suficiente na bomba.`;
    }
  }

  supplyPerLiter(quantifyLiter: number): string {
    const resultLiter: number = quantifyLiter * this.valueLiter;
    this.amountFuel -= quantifyLiter;
    if (this.amountFuel >= quantifyLiter) {
      return `A quantidade de litros a ser abastecida é ${quantifyLiter} e o valor total é de ${resultLiter.toFixed(
        2
      )}.`;
    } else {
      return `Não há combustível suficiente na bomba.`;
    }
  }

  changeValue(newValue: number): string {
    this.valueLiter = newValue;
    return `O valor do combustível foi alterado para ${newValue}.`;
  }

  changeTypeFuel(newType: string): string {
    this.typeFuel = newType;
    return `O tipo de combustível foi alterado para ${newType}.`;
  }

  changeQuantityFuel(newFuel: number): string {
    this.amountFuel += newFuel;
    return `A quantidade na bomba de combustível agora é ${newFuel}.`;
  }
}

const fuelPump = new FuelPump("Gasolina", 5.2, 100);
console.log(fuelPump.supplyByValue(70));
console.log(fuelPump.gasStation);
console.log(fuelPump.supplyPerLiter(20));
console.log(fuelPump.gasStation);
console.log(fuelPump.changeValue(6.5));
console.log(fuelPump.gasStation);
console.log(fuelPump.changeTypeFuel("Etanol"));
console.log(fuelPump.gasStation);
console.log(fuelPump.changeQuantityFuel(200));
console.log(fuelPump.gasStation);

// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.
