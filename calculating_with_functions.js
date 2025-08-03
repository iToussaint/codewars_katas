/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five()));   //  must return 35
four(plus(nine()));     //  must return 13
eight(minus(three()));  //  must return 5
six(dividedBy(two()));  //  must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

Functional Programming
*/

function zero(callb = "") {
  return Math.trunc(eval("0" + callb));
}
function one(callb = "") {
  return Math.trunc(eval("1" + callb));
}
function two(callb = "") {
  return Math.trunc(eval("2" + callb));
}
function three(callb = "") {
  return Math.trunc(eval("3" + callb));
}
function four(callb = "") {
  return Math.trunc(eval("4" + callb));
}
function five(callb = "") {
  return Math.trunc(eval("5" + callb));
}
function six(callb = "") {
  return Math.trunc(eval("6" + callb));
}
function seven(callb = "") {
  return Math.trunc(eval("7" + callb));
}
function eight(callb = "") {
  return Math.trunc(eval("8" + callb));
}
function nine(callb = "") {
  return Math.trunc(eval("9" + callb));
}

function plus(num) {
  return `+${num}`;
}
function minus(num) {
  return `-${num}`;
}
function times(num) {
  return `*${num}`;
}
function dividedBy(num) {
  return `/${num}`;
}
