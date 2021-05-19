export function digitDegree(n: number): number {
  let nums = [...n.toString()].map((n) => +n);
  let count = 0;
  let sum = 0;

  while (nums.length > 1) {
    sum = nums.reduce((acc, num) => acc + num, 0);
    nums = [...sum.toString()].map((n) => +n);
    count++;
  }

  return count;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(911));
