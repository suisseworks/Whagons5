const divide = (a, b) => {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  };
  
  describe('Math operations', () => {
    test('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });
  
    test('throws error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });