export function chunkyMonkey(arr: any[], size: number): any[][] {
  let count = 0;
  const nested = [];

  while (count < arr.length) {
    nested.push(arr.slice(count, (count += size)));
  }

  return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
