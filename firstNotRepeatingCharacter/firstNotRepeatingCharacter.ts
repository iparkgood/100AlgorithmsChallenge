export function firstNotRepeatingCharacter(s: string): string {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i];
    }
  }

  return "_";
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
