/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Strings | Fundamentals
*/

function count(string) {
  return Object.fromEntries(
    new Map(
      string
        .split("")
        .map((letter, index, array) => [
          letter,
          array.reduce(
            (times, word) => (word === letter ? times + 1 : times),
            0
          ),
        ])
        .filter(
          (element, index1, arr) =>
            !arr.find((el, index2) => el[0] === element[0] && index1 < index2)
        )
    )
  );
}
