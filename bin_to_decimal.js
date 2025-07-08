/*
Complete the function which converts a binary number (given as a string) to a decimal number.

Binary | Fundamentals
*/

function binToDec(bin) {
  return bin
    .split("")
    .map((digit, index, array) => digit * Math.pow(2, array.length - index - 1))
    .reduce((result, number) => result + number, 0);
}
