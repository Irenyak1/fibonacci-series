//importing chalk for colors
const chalk = require('chalk');

// importing readline-sync to enable user input data at the terminal
var readlineSync = require('readline-sync');

// variable fibon to store the values of the array
let fibon = [];

const num = readlineSync.question(chalk.red('Please enter a number '));

/* 
    Function fibonacci to check if the input is a number and then printout 
    all the fibonacci numbers upto the given number
*/
function fibonacci() {
    if (isNaN(num) == false) {
        for (let i = 0; i <= 100; i++) {
            if (i == 0) {
                fibon.push(0)
            }
            else if (i == 1) {
                fibon.push(1);
            }
            else {
                const biggest = fibon[fibon.length - 1];
                const next = fibon[fibon.length - 2] + biggest;
                fibon.push(next);
            }
        }
        // printing the fibonacci number on the console
        console.log(chalk.green('The fibonacci number at this position is ' + fibon[num]));

        // Returning the fibonacci number
        return fibon[num];

        // Printing a message to the console in case one has not entered a number
    } else
        console.log(chalk.red("Please provide a number"));
}
//Calling the function
fibonacci()

//Exporting the function
module.exports = { fibonacci };
