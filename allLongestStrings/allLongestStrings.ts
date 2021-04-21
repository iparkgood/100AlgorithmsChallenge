export function allLongestStrings(inputArray: string[]): string[] {
  let longestLeng = 0;
  let longestStrs = [];

  inputArray.forEach((input) => {
    longestLeng = input.length < longestLeng ? longestLeng : input.length;
  });

  inputArray.forEach((input) => {
    if (longestLeng === input.length) {
      longestStrs.push(input);
    }
  });

  return longestStrs;
}

console.log(allLongestStrings(["aba", "aaaa", "addc", "vcd", "aba"]));
