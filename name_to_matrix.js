/*
Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

If the name has a length of 0, return "name must be at least one letter"

Examples
"Bill" ==> [ ["B", "i"],
             ["l", "l"] ]

"Frank" ==> [ ["F", "r", "a"],
              ["n", "k", "."],
              [".", ".", "."] ]
              
Strings | Arrays | Algorithms | Matrix
*/

function matrixfy(str) {
  const res = Math.ceil(Math.sqrt(str.length)) ** 2;
  return str.length < 1
    ? "name must be at least one letter"
    : [...str.split(""), ...Array(res - str.length)]
        .fill(".", str.length)
        .map((el, ind, arr) =>
          (ind + 1) % Math.ceil(Math.sqrt(str.length)) === 0 &&
          ind !== arr.length - 1
            ? (el += "|")
            : el
        )
        .join("")
        .split("|")
        .map((el) => el.split(""));
}
