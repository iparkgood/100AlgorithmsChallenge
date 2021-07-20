export function stolenLunch(note: string): string {
  let numToChar = [...note.slice(0, note.indexOf(":"))];
  let charToNum = [...note.slice(note.indexOf(":") + 2)]
    .map((x) => x.charCodeAt(0) - 97)
    .join("");

  for (let i = 0; i < numToChar.length; i++) {
    if (Number.isInteger(+numToChar[i]) && numToChar[i] !== " ") {
      const code = String.fromCharCode(+numToChar[i] + 97);
      numToChar[i] = code;
    }
  }

  return numToChar.join("") + ": " + charToNum;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
