/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Ciphers | Fundamentals
*/

function rot13(message) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return message
    .split("")
    .map((letter) =>
      letter.charCodeAt() >= 65 && letter.charCodeAt() < 78
        ? letters[letter.charCodeAt() - 39 + 13]
        : letter.charCodeAt() >= 78 && letter.charCodeAt() <= 90
        ? letters[letter.charCodeAt() - 39 - 13]
        : letter.charCodeAt() >= 97 && letter.charCodeAt() < 110
        ? letters[letter.charCodeAt() - 97 + 13]
        : letter.charCodeAt() >= 110 && letter.charCodeAt() <= 122
        ? letters[letter.charCodeAt() - 97 - 13]
        : letter
    )
    .join("");
}
