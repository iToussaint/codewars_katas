/*
Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

Fundamentals
*/

function sumDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, num) => sum + (isNaN(Number(num)) ? 0 : Number(num)), 0);
}
