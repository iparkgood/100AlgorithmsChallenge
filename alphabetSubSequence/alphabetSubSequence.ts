export function alphabetSubsequence(s: string): boolean {
  const chars: string[] = s.split("");
  let charValues: number[] = [];

  chars.forEach((c: string) => {
    charValues.push(c.charCodeAt(0));
  });

  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
