/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

Fundamentals | Algorithms
*/

function between(a, b) {
  return [...Array(b - a + 1).keys()].map((number) => number + a);
}
