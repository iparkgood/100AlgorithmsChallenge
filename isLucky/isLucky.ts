export function isLucky(n: number): boolean {
  const numbers = [...n.toString()];
  const first = numbers.slice(0, numbers.length / 2).reduce((sum, f) => sum + +f, 0);
  const second = numbers.slice(-numbers.length / 2).reduce((sum, s) => sum + +s, 0)

  return first === second;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
