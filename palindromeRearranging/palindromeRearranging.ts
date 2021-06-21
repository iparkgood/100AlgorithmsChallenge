export function palindromeRearranging(inputString: string): boolean {
  let obj = {};
  let odd = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (obj.hasOwnProperty(inputString[i])) {
      obj[inputString[i]]++;
    } else {
      obj[inputString[i]] = 1;
    }
  }

  for (const prop in obj) {
    if (obj[prop] % 2 !== 0) {
      odd++;
    }
  }

  return odd === 0;
}

console.log(palindromeRearranging("aabb"));
