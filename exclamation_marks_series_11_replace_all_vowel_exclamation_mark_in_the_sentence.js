/*

Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"

Fundamentals
*/

function replace(s) {
  return s
    .split("")
    .map((letter) => ("aeiouAEIOU".includes(letter) ? "!" : letter))
    .join("");
}
