export function pigLatin(str: string): string {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      if (i === 0) {
        return str + "way";
      } else {
        return str.slice(i, str.length) + str.slice(0, i) + "ay";
      }
    }
  }
}

console.log(pigLatin("glove")); //oveglay
console.log(pigLatin("eight")); //eightway
