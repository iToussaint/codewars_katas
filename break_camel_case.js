/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

Strings | Fundamentals
*/

function solution(string) {
  return string
    .split("")
    .flatMap((letter) =>
      letter === letter.toUpperCase() ? [" ", letter] : letter
    )
    .join("");
}
