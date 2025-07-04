/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

Strings | Fundamentals
*/

function likes(names) {
  return names.length > 3
    ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    : names.length > 2
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : names.length > 1
    ? `${names[0]} and ${names[1]} like this`
    : names.length > 0
    ? `${names[0]} likes this`
    : "no one likes this";
}
