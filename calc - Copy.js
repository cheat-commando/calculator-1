
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? ", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	let result = 0

	if (mathSymbol === "+") {
		result = num1 + num2
	} else if (mathSymbol === "-") {
		result = num1 - num2
	} else if (mathSymbol === "*") {
		result = num1 * num2
	} else if (mathSymbol === "/") {
		result = num1 / num2
	} else if (mathSymbol === "^" or mathSymbol === "**") {
		result = num1 ** num2
	} else if (mathSymbol == "%") {
		result = num1 % num2
	} else if (mathSymbol === "sqrt") {
		result = Math.sqrt(num1)
	} else if (mathSymbol === "cube") {
		result = num1 ** 3
	} else {
		result = NaN
	}

	console.log(`${num1} ${mathSymbol} ${num2} = ${result}`)
	console.log(`The answer is: ${result}.`)
-
	// This line closes the connection to the command line interface.
	reader.close()

});
