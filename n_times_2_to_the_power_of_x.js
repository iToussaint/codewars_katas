/*
You are given a function puzzle that accepts 2 positive integers (very important!) in the specified order, n and x, and returns the result of n * Math.pow(2, x). Sounds easy, right? Well, there is only one condition - you must shorten the code so it meets the strict character count requirements (without altering how the function behaves for positive integers of course).

Puzzles | Restricted
*/

let puzzle = (n, x) => n << x;
