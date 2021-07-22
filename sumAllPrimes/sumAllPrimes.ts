export function sumAllPrimes(num: number): number {
  let sumPrimes = 0;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sumPrimes += i;
    }
  }

  return sumPrimes;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
