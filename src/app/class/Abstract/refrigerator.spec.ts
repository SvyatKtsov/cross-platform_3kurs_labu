import { Refrigerator} from "./refrigerator"

describe('Refrigerator Tests', () => {
  let fridge: Refrigerator;

  beforeEach(() => {
    console.log('Running beforeEach...');
    fridge = new Refrigerator('LG', 200, 80, 300); 
  });

  afterEach(() => {
    console.log('Running afterEach...');
  });

  // it() - визначає окремий тест
  // expect() - функція, що перевіряє, чи виконуються очікування
  // toThrow() - перевіряє, чи викидає функція помилку
  it('should throw an error for invalid brand', () => {
    expect(() => new Refrigerator('', 100, 50, 200)).toThrow(new Error('Invalid brand'));
  });

  it('should throw an error for negative power', () => {
    expect(() => new Refrigerator('Samsung', -100, 50, 200)).toThrow(new Error('Power must be a positive number'));
  });

  it('should throw an error for negative weight', () => {
    expect(() => new Refrigerator('LG', 150, -50, 200)).toThrow(new Error('Weight must be a positive number'));
  });

  it('should throw an error for negative volume', () => {
    expect(() => new Refrigerator('LG', 150, 60, -300)).toThrow(new Error('Volume must be a positive number'));
  });

  it('should create a valid Refrigerator', () => {
    expect(fridge.brand).toBe('LG');
    expect(fridge.power).toBe(200);
    expect(fridge.weight).toBe(80);
    expect(fridge.volume).toBe(300);
  });

});
