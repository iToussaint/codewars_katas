/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"

Strings | ASCII Art | Fundamentals
*/

function diamond(n) {
  return n < 1 || n % 2 === 0
    ? null
    : [...Array(n).keys()]
        .map((number) =>
          number > n / 2 ? (n - number) * 2 - 1 : 2 * number + 1
        )
        .map(
          (number) =>
            "*".repeat(number).padStart(n - (n - number) / 2, " ") + "\n"
        )
        .join("");
}
