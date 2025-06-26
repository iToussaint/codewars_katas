/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

Fundamentals | Strings
*/

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((element) => element !== "!")
    .join("");
}
