/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

Fundamentals
*/

function longest(s1, s2) {
  return [...s1.split(""), ...s2.split("")]
    .filter((letter, index, arr) => index === arr.indexOf(letter))
    .sort()
    .join("");
}
