export function firstDuplicate(a: number[]): number {
  let dupes = {};

  for (let i = 0; i < a.length; i++) {
    if (dupes.hasOwnProperty(a[i])) {
      return a[i];
    } else {
      dupes[a[i]] = 1;
    }
  }

  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
