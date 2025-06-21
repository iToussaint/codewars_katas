/*
    A numeral system is a way of writing numbers using a specific set of digits: for example, the decimal system (also called base-10), which is the most commonly used numeral system worldwide, uses the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 to represent numbers. There is also the binary system (also called base-2), which uses the digits 0 and 1.

    For digits that are bigger than 9, the English alphabet is used: 'A' is used for the number 10 in bases higher than 10. This goes all the way to 'Z' in base-36.

    The largest digit allowed in a certain base is always 1 smaller than this base.

    You need to write a function that checks whether all of the digits of a non-negative integer number are a part of the specified base: for example, the number 17253 is valid for base-8, because this base contains the digits 0, 1, 2, 3, 4, 5, 6, 7, but the number 19823 is not valid for this base, because it contains the digits 9 and 8 which are not a part of base-8.

    Note: numbers will be checked against bases from 2 to 36. For digits > 9 (A, B, etc.) such digits will always be uppercase. The function should return a boolean: true for numbers that are valid for a specified numeral system and false otherwise.
*/

function validateBase(num, base) {
  const letters = [
    { number: 0, letter: "0" },
    {
      number: 1,
      letter: "1",
    },
    {
      number: 2,
      letter: "2",
    },
    {
      number: 3,
      letter: "3",
    },
    {
      number: 4,
      letter: "4",
    },
    {
      letter: "5",
      number: 5,
    },
    {
      letter: "6",
      number: 6,
    },
    {
      letter: "7",
      number: 7,
    },
    {
      letter: "8",
      number: 8,
    },
    {
      letter: "9",
      number: 9,
    },
    { number: 10, letter: "A" },
    {
      number: 11,
      letter: "B",
    },
    {
      number: 12,
      letter: "C",
    },
    {
      number: 13,
      letter: "D",
    },
    {
      number: 14,
      letter: "E",
    },
    {
      letter: "F",
      number: 15,
    },
    {
      letter: "G",
      number: 16,
    },
    {
      letter: "H",
      number: 17,
    },
    {
      letter: "I",
      number: 18,
    },
    {
      letter: "J",
      number: 19,
    },
    {
      letter: "K",
      number: 20,
    },
    {
      letter: "L",
      number: 21,
    },
    {
      letter: "M",
      number: 22,
    },
    {
      letter: "N",
      number: 23,
    },
    {
      letter: "O",
      number: 24,
    },
    {
      letter: "P",
      number: 25,
    },
    {
      letter: "Q",
      number: 26,
    },
    {
      letter: "R",
      number: 27,
    },
    {
      letter: "S",
      number: 28,
    },
    {
      letter: "T",
      number: 29,
    },
    {
      letter: "U",
      number: 30,
    },
    {
      letter: "V",
      number: 31,
    },
    {
      letter: "W",
      number: 32,
    },
    {
      letter: "X",
      number: 33,
    },
    {
      letter: "Y",
      number: 34,
    },
    {
      letter: "Z",
      number: 35,
    },
  ];

  let gotten = "";

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < 36; j++) {
      if (letters[j].letter == num.charAt(i)) {
        if (base <= letters[j].number) return false;
      }
    }
  }
  return true;
}

validateBase("7623", 8);
validateBase("ABCDEF", 16);
validateBase("6124", 5);
validateBase("ABC", 12);
validateBase("Y", 34);
validateBase("2738", 8);
validateBase("0020", 10);
