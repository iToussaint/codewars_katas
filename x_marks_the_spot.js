/*
Write a function that takes in a positive integer n and returns an n x n matrix with an X in the middle. The X will be represented by 1's and the rest will be 0's.

Examples
5 --->   [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]]

6  --->  [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]]

Arrays | Algorithms
*/

function x(n) {
  return [...Array(n)].map((element, index) =>
    Array(n)
      .fill(0)
      .map((el, ind) => (index === ind || n - (index + 1) === ind ? 1 : 0))
  );
}
