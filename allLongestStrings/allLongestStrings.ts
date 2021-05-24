export function allLongestStrings(inputArray: string[]): string[] {
  let max = 0;

  inputArray.forEach((input) => {
    max = max < input.length ? input.length : max;
  });

  return inputArray.filter((input) => input.length === max);
}

console.log(allLongestStrings(["aba", "aaaa", "addc", "vcd", "aba"]));
