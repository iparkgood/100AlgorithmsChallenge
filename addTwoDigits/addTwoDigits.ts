export function addTwoDigits(n: any): number {
  return [...n.toString()].reduce((acc, n) => acc + +n, 0);
}

console.log(addTwoDigits(29));
