export function sumOddFibonacciNums(num: number): number {
  let sum = 0;
  let current = 1;
  let prev = 1;

  while (current < num) {
    if (current % 2 !== 1) sum += current;

    const next = current + prev;
    prev = current;
    current = next;
  }

  return sum;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
