export function isCaseInsensitivePalindrome(inputString: string): boolean {
  return (
    inputString.toLowerCase() ===
    [...inputString.toLowerCase()].reverse().join("")
  );
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
