/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

Fundamentals
*/

const reverseSeq = (n) => {
  let array = new Array();
  for (let i = 1; i <= n; i++) {
    array.unshift(i);
  }
  return array;
};
