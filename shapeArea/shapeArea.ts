export function shapeArea(n: number): number {
  if (n === 1) return 1;

  return 1 + Math.pow(2, n);
}

console.log(shapeArea(2));
console.log(shapeArea(3));
