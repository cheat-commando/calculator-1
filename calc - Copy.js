
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?\nType an operator and two numbers, separated by spaces.\nType  +  for addition\nType  -  for subtraction\nType  *  for multiplication\nType  /  for division\nType  %  for modulo operator\nType  ^  or  **  to raise to a power\nType  sqrt  for square root (You only need one number for this)\nType  square  to find the square of a number (You only need one number for this)\nType  cube  to find the cube of a number (You only need one number for this)\n", function(input){
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
	} else if (mathSymbol === "^" || mathSymbol === "**") {
		result = num1 ** num2
	} else if (mathSymbol == "%") {
		result = num1 % num2
	} else if (mathSymbol === "sqrt") {
		result = Math.sqrt(num1)
	} else if (mathSymbol === "cube") {
		result = num1 ** 3
	} else if (mathSymbol === "square") {
		result = num1 ** 2
	} else {
		result = NaN
	}

	num2Dead = ` ${num2} `

	if (isNaN(num2)) {
		num2Dead = ` `
	}

	console.log(`${num1} ${mathSymbol}${num2Dead}= ${result}`)
	console.log(`The answer is: ${result}.`)
-
	// This line closes the connection to the command line interface.
	reader.close()

});
