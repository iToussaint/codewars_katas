function solution(string) {
  return string
    .split("")
    .flatMap((letter) =>
      letter === letter.toUpperCase() ? [" ", letter] : letter
    )
    .join("");
}
