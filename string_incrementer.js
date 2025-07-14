/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

Regular Expressions | Strings
*/

function incrementString(strng) {
  if (!isNaN(Number(strng)))
    return `${Number(strng) + 1}`.padStart(strng.length, "0");
  for (let i = strng.length - 1; i >= 0; i--) {
    if (isNaN(Number(strng.slice(i)))) {
      const sliced = strng.slice(i);
      return (
        strng.slice(0, i + 1) +
        `${Number(strng.slice(i + 1)) + 1}`.padStart(sliced.length - 1, "0")
      );
    }
  }
}
