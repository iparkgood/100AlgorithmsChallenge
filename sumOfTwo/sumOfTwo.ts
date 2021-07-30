export function sumOfTwo(a: number[], b: number[], v: number): boolean {
  let obj = {};

  for (let i = 0; i < a.length; i++) {
    if (!obj.hasOwnProperty(a[i])) {
      obj[a[i]] = 1;
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (v - b[i] in obj) {
      return true;
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
