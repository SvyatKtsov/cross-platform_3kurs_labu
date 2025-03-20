import { Appliance } from './Appliance';

export class VacuumCleaner extends Appliance {
  constructor(
    brand: string,
    power: number,
    weight: number,
    public bagCapacity: number
  ) { 
    super(brand, power, weight);
    if (bagCapacity <= 0) {
      throw new Error('Bag capacity must be a positive number');
    }
    this.bagCapacity = bagCapacity;
  }

  displayInfo(): void {
    console.log(`Vacuum Cleaner Info:
      Brand: ${this.brand}
      Power: ${this.power}W
      Weight: ${this.weight}kg
      Bag Capacity: ${this.bagCapacity}L
    `);
  }
}
