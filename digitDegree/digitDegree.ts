export function digitDegree(n: number): number {
  const nums = [...n.toString()].map((num) => +num);

  if (nums.length === 1) return 0;

  let sum = nums.reduce((acc, num) => acc + num);
  let count = 1;

  while (sum.toString().length !== 1) {
    sum = [...sum.toString()].reduce((acc, num) => acc + +num, 0);
    count++;
  }

  return count;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(911));
