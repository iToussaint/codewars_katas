/*
Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]

Strings | Arrays | Fundamentals
*/

var capitals = (word) =>
  word
    .split("")
    .map((letter, index) =>
      letter === letter.toUpperCase() ? index : undefined
    )
    .filter((element) => element !== undefined);
