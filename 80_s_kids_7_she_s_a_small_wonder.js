/*
Vicky is quite the small wonder. Most people don't even realize she's not a real girl, but a robot living amongst us. Sure, if you stick around her home for a while you might see her creator open up her back and make a few tweaks and even see her recharge in the closet instead of sleeping in a bed.

In this kata, we're going to help Vicky keep track of the words she's learning.

Write a function, learnWord(word) ( LearnWord(word) in C# ) which is a method of the Robot object. The function should report back whether the word is now stored, or if she already knew the word.

Example:

var vicky = new Robot();
vicky.learnWord('hello') -> 'Thank you for teaching me hello'
vicky.learnWord('abc') -> 'Thank you for teaching me abc'
vicky.learnWord('hello') -> 'I already know the word hello'
vicky.learnWord('wow!') -> 'I do not understand the input'
Case shouldn't matter. Only alpha characters are valid. There's also a little trick here. Enjoy!

Object-oriented Programming | Puzzles | Riddles
*/

function Robot() {
  const alreadyKnew = "I already know the word";
  const newWord = "Thank you for teaching me";
  const notUnderstood = "I do not understand the input";
  this.words = [
    ...newWord.toLowerCase().split(" "),
    ...alreadyKnew.toLowerCase().split(" "),
    ...notUnderstood.toLowerCase().split(" "),
  ];
}

Robot.prototype.learnWord = function (word) {
  if (this.words.includes(word.toLowerCase()))
    return `I already know the word ${word}`;
  if (
    word
      .split("")
      .some(
        (el) =>
          el.toLowerCase().charCodeAt() < 97 ||
          el.toLowerCase().charCodeAt() > 122
      ) ||
    word.trim().length < 1
  )
    return "I do not understand the input";
  this.words.push(word.toLowerCase());
  return `Thank you for teaching me ${word}`;
};
