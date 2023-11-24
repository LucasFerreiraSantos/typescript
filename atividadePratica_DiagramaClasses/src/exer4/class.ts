class Sender {
  constructor(
    public name: string,
    private _weight: number,
    private _distance: number
  ) {}

  get weight(): number {
    return this._weight;
  }

  get distance(): number {
    return this._distance;
  }
}

class Transporter {
  constructor(public name: string, private valueKm: number = 0) {}

  freightWeigth(weight: number): void {
    console.log(`O valor do frete é ${weight * this.valueKm}`);
  }

  freightDistance(distance: number): void {
    console.log(`O valor do frete é ${distance * this.valueKm}`);
  }
}

export { Sender, Transporter };
