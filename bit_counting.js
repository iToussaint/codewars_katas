/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

function countBits(n) {
  let remainder = undefined;
  let counter = 0;
  while (n > 0) {
    remainder = n % 2;
    if (remainder === 1) counter++;
    n = Math.floor(n / 2);
  }

  return counter;
}
