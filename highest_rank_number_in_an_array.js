/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

Arrays | Fundamentals
*/

function highestRank(arr) {
  return arr
    .sort((a, b) => b - a)
    .reduce((a, b, index, array) =>
      array.filter((el) => el === a).length >=
      array.filter((el) => el === b).length
        ? a
        : b
    );
}
