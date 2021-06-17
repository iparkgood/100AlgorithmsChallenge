export function missingLetters(str: string): string {
  if (str[0] !== "a") {
    return "a";
  }

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1].charCodeAt(0) - str[i].charCodeAt(0) > 1) {
      return String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
  }

  return undefined;
}

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
