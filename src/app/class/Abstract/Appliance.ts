export abstract class Appliance {
  constructor(
    public brand: string,
    public power: number,
    public weight: number
  ) {
    if (typeof brand !== 'string' || brand.trim() === '') {
      throw new Error('Invalid brand');
    }
    if (typeof power !== 'number' || power <= 0) {
      throw new Error('Power must be a positive number');
    }
    if (typeof weight !== 'number' || weight <= 0) {
      throw new Error('Weight must be a positive number');
    }
  }

  getPower(): number {
    return this.power;
  }

  abstract displayInfo(): void;
  [key: string]: any;
}