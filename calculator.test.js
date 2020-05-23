const cal = require('./calculator'); // Arrange

describe('add operaton', () => {
    test('adds 1 + 2 to equal 3', () => {
        var value = cal.add(1, 2); // Act
      expect(value).toBe(3); // Assert
    });
    
    test('adds 5 + 5 to equal 10', () => {
        expect(cal.add(5, 5)).toBe(10);
    });
})

describe('Subtract operation', () => {
    test('subtracts 5 - 5 to equal 0', () => {
        expect(cal.subtract(5, 5)).toBe(0);
    });
    
    test('subtracts 3 - 2 to equal 1', () => {
        expect(cal.subtract(3, 2)).toBe(1);
    });
})