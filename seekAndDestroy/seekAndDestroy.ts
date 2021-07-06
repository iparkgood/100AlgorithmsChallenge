export function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((a1) => !arr2.includes(a1));
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
