export function convertString(s: string, t: string): boolean {
  const sArr = [...s];
  let tIdx = 0;
  let word = "";

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === t[tIdx]) {
      word = word.concat(sArr[i]);
      tIdx++;
    }
  }

  return word === t;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights")); //true
console.log(convertString("addbyca", "abcd")); //false
