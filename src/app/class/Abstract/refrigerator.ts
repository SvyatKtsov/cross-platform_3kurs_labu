import { Appliance } from './Appliance';

export class Refrigerator extends Appliance {
  constructor(
    brand: string,
    power: number,
    weight: number,
    public volume: number
  ) {
    super(brand, power, weight);
    if (volume <= 0) {
      throw new Error('Volume must be a positive number');
    }
    this.volume = volume;
  }

  displayInfo(): void {
    console.log(`Refrigerator Info:
      Brand: ${this.brand}
      Power: ${this.power}W
      Weight: ${this.weight}kg
      Volume: ${this.volume}L
    `);
  }
}
