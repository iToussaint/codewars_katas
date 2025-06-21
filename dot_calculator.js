/*
    Dot Calculator
    You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

    Here are the following valid operators :

    + Addition
    - Subtraction
    * Multiplication
    // Integer Division
    Your Work (Task)
    You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

    Examples (Input => Output)
    * "..... + ..............." => "...................."
    * "..... - ..."             => ".."
    * "..... - ."               => "...."
    * "..... * ..."             => "..............."
    * "..... * .."              => ".........."
    * "..... // .."             => ".."
    * "..... // ."              => "....."
    * ". // .."                 => ""
    * ".. - .."                 => ""
*/

function dotCalculator(equation) {
  let lhs = 0;
  let rhs = 0;
  let opIndex = 0;
  let op = null;
  let result = 0;
  for (let i = 0; i < equation.length; i++) {
    if (equation.charAt(i) !== ".") {
      opIndex = i + 1;
      op = equation[i + 1];
      break;
    }
    lhs++;
  }

  rhs = equation.length - 3 - lhs;

  switch (op) {
    case "+":
      result = lhs + rhs;
      break;

    case "-":
      result = lhs - rhs;
      break;
    case "*":
      result = lhs * rhs;
      break;
    case "/":
      result = Math.floor(lhs / (rhs - 1));
      break;

    default:
      console.log("INVALID OPERATTTOR!!!");
      break;
  }

  console.log(result);

  return ".".repeat(result);
}
