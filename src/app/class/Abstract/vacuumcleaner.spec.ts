import { VacuumCleaner } from './vacuumcleaner';

describe('VacuumCleaner Tests', () => {
  let vacuum: VacuumCleaner;

  beforeEach(() => {
    console.log('Running beforeEach...');
    vacuum = new VacuumCleaner('Dyson', 250, 5, 2); 
  });

  afterEach(() => {
    console.log('Running afterEach...');
  });

  it('should throw an error for invalid brand', () => {
    expect(() => new VacuumCleaner('', 100, 50, 200)).toThrow(new Error('Invalid brand'));
  });

  it('should throw an error for negative power', () => {
    expect(() => new VacuumCleaner('Dyson', -100, 50, 200)).toThrow(new Error('Power must be a positive number'));
  });

  it('should throw an error for negative weight', () => {
    expect(() => new VacuumCleaner('Dyson', 200, -5, 2)).toThrow(new Error('Weight must be a positive number'));
  });

  it('should throw an error for negative bag capacity', () => {
    expect(() => new VacuumCleaner('Bosch', 250, 8, -3)).toThrow(new Error('Bag capacity must be a positive number'));
  });

  it('should create a valid VacuumCleaner', () => {
    expect(vacuum.brand).toBe('Dyson');
    expect(vacuum.power).toBe(250);
    expect(vacuum.weight).toBe(5);
    expect(vacuum.bagCapacity).toBe(2);
  });
  
});
