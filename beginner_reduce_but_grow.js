/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
Fundamentals | Arrays
*/

function grow(x) {
  return x.reduce((product, number) => product * number, 1);
}
