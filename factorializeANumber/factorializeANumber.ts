export function factorializeANumber(num: number): number {
  let factorial = 1;

  for (let i = num; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
