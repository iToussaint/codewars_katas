/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Fundamentals | Strings | Arrays
*/

function high(x) {
  return x
    .split(" ")
    .reduce((word1, word2) =>
      word1
        .split("")
        .reduce(
          (sum, _, index, array) => sum + array.join("").charCodeAt(index) - 96,
          0
        ) >=
      word2
        .split("")
        .reduce(
          (sum, _, index, array) => sum + array.join("").charCodeAt(index) - 96,
          0
        )
        ? word1
        : word2
    );
}
