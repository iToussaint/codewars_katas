/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

Regular Expressions | Strings | Fundamentals
*/

function removeUrlAnchor(url) {
  return url.indexOf("#") === -1 ? url : url.slice(0, url.indexOf("#"));
}
