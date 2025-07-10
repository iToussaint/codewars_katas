/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

Fundamentals | Arrays
*/

function multipleOfIndex(array) {
  //Filter the numbers whose division with its index gives the remainder of zero and include all the zeros as well
  return array.filter((number, index) => number % index === 0 || number === 0);
}
