const operationsHistories: object[] = [];

class Calculate {
  constructor(private operationsHistories: object[]) {}

  get showOperations(): object[] {
    return this.operationsHistories;
  }

  calculateOperations(operator: number, operation: string, operating: number) {
    switch (true) {
      case operation === "+":
        const resultSum: object = {
          calculation: operator + operating,
          result: `A operação é de SOMA, tendo como operador o número ${operator} e operando ${operating}. O resultado da operação é ${
            operator + operating
          }.`,
        };
        this.operationsHistories.push(resultSum);
        break;
      case operation === "x":
        const resultMultiplication: object = {
          calculation: operator * operating,
          result: `A operação é de SOMA, tendo como operador o número ${operator} e operando ${operating}. O resultado da operação é ${
            operator * operating
          }.`,
        };
        this.operationsHistories.push(resultMultiplication);
        break;
      case operation === "/":
        const resultDivision: object = {
          calculation: operator / operating,
          result: `A operação é de SOMA, tendo como operador o número ${operator} e operando ${operating}. O resultado da operação é ${
            operator / operating
          }.`,
        };
        this.operationsHistories.push(resultDivision);
        break;
      case operation === "-":
        const resultSubtract: object = {
          calculation: operator - operating,
          result: `A operação é de SOMA, tendo como operador o número ${operator} e operando ${operating}. O resultado da operação é ${
            operator - operating
          }.`,
        };
        this.operationsHistories.push(resultSubtract);
        break;
      default:
        console.log("Operação inválida.");
    }
  }
}

const calculate = new Calculate(operationsHistories);

calculate.calculateOperations(10, "+", 10);
calculate.calculateOperations(10, "x", 10);
calculate.calculateOperations(10, "/", 10);
calculate.calculateOperations(10, "-", 10);
console.log(calculate.showOperations);

// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.
