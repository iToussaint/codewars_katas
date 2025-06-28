/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

Strings | Fundamentals
*/

function isIsogram(str) {
  return (
    str
      .toLowerCase()
      .split("")
      .filter((letter1, index1, array) =>
        array.find(
          (letter2, index2) => letter1 === letter2 && index1 !== index2
        )
      ).length === 0
  );
}
