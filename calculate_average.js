/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.

Fundamentals | Arrays
*/

function findAverage(array) {
  return array.length > 0
    ? array.reduce((sum, number) => sum + number, 0) / array.length
    : 0;
}
