abstract class FormatElement {
  toDesign(): void {}
  resize(newValue: number, newValueHeight?: number): void {}
}

class Circle implements FormatElement {
  constructor(public raio: number) {}
  toDesign(): void {
    console.log(`Círculo desenhado! ${this.raio}.`);
  }
  resize(newValue: number): void {
    console.log(`Círculo redimensionado! ${this.raio + newValue}.`);
  }
}

class Rectangle implements FormatElement {
  constructor(public length: number, public height: number) {}
  toDesign(): void {
    console.log(`Retângulo desenhado! ${this.length} x ${this.height}.`);
  }
  resize(newValueLength: number, newValueHeight: number): void {
    console.log(
      `Retângulo desenhado! ${this.length + newValueLength} x ${
        this.height + newValueHeight
      }.`
    );
  }
}

export { Circle, Rectangle };
