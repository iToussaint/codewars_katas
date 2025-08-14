/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

Strings | Mathematics | Algorithms | Fundamentals
*/

function expandedForm(num) {
  return Array.from(num.toString())
    .map((number, index, array) => number * 10 ** (array.length - index - 1))
    .filter((number) => number !== 0)
    .join(" + ");
}
