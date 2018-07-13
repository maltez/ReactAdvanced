const { assert } = require('chai');
const factorial = require('../src/factorial');

test('Test factorial method. Input 5. Expect 120', () => {
    // Arrange
    const input = 5;
    const expectedRes = 120;

    // Act 
    const actualRes = factorial(input);

    // Assert
    assert.equal(actualRes, expectedRes, 'Invalid factorial calculation');
});

test('Test factorial method. Input 0 expect 1.', () => {
    // Arrange
    const input = 0;
    const expectedRes = 1;

    // Act 
    const actualRes = factorial(input);

    // Assert
    assert.equal(actualRes, expectedRes, 'Invalid factorial calculation');
});

test('Test factorial method. Input 1 expect 1.', () => {
    // Arrange
    const input = 1;
    const expectedRes = 1;

    // Act 
    const actualRes = factorial(input);

    // Assert
    assert.equal(actualRes, expectedRes, 'Invalid factorial calculation');
});

test('Test factorial method. Input -1 expect Throw an error.', () => {
    // Arrange
    const input = -1;

    // Act 
    assert.throw(()=> {
        factorial(input);
    }, 'Invalid input range');
});

