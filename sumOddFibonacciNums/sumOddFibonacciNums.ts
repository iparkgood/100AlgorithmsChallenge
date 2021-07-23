export function sumOddFibonacciNums(num: number): number {
  let fibs = [1, 1];
  let idx = 2;

  while (fibs[idx - 2] + fibs[idx - 1] < num) {
    fibs.push(fibs[idx - 2] + fibs[idx - 1]);
    idx++;
  }

  return fibs.filter((f) => f % 2 !== 0).reduce((acc, n) => acc + n);
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
