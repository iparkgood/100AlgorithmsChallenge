export function longestDigitsPrefix(inputString: string): string {
  let digits = "";
  let max = "";

  for (let i = 0; i < inputString.length; i++) {
    if (Number.isInteger(+inputString[i])) {
      digits += inputString[i];
      if (!Number.isInteger(+inputString[i + 1])) {
        if (max.length < digits.length) {
          max = digits;
          digits = "";
        }
      }
    }
  }

  return max;
}

console.log(longestDigitsPrefix("123aa4567"));
