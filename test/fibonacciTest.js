//Unit Testing with Mocha and Chai
const chai = require('chai');
const { assert } = chai;

// importing chalk to provide the color 
const chalk = require('chalk')

// importing the file containing the function that will be used in the tests
const myFibonacci = require('../fibonacci')

// Tests to prove if the fibonacci number is right at the provided position.
describe("The fibonacci series", () => {
    it('Fibonacci  number should be 1', () => {
        assert.equal(myFibonacci.fibonacci(1), 1);
    });

    // Failing test that throws an error
    it('Failing test  ', () => {
        assert.false(true);
    });
    // Failing test that that does not throw an error
    it(chalk.red('Failure '), () => {
        assert.notEqual(myFibonacci.fibonacci(2), 2);
    });

    //Passing tests
    it('Fibonacci  number should be 1 ', () => {
        assert.equal(myFibonacci.fibonacci(2), 1);
    });

    it('Fibonacci  number should be 2', () => {
        assert.equal(myFibonacci.fibonacci(3), 2);
    });

});
