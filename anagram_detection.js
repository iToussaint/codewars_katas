/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

Strings | Fundamentals
*/

var isAnagram = (test, original) =>
  test
    .split("")
    .map((element) => element.toLowerCase().charCodeAt())
    .reduce((sum, number) => sum + number, 0) ===
  original
    .split("")
    .map((element) => element.toLowerCase().charCodeAt())
    .reduce((sum, number) => sum + number, 0);
