/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)

Strings | ASCII Art | Fundamentals
*/

function towerBuilder(nFloors) {
  let array = new Array();
  for (let i = 0; i < nFloors; i++) {
    let element = "";
    element += "*".repeat(2 * i + 1);
    array.push(
      element
        .padStart(nFloors * 2 - 1 - (nFloors * 2 - 1 - element.length) / 2, " ")
        .padEnd(nFloors * 2 - 1, " ")
    );
  }

  return array;
}
