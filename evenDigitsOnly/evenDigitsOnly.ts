export function evenDigitsOnly(n: number): boolean {
  return [...n.toString()].map((n) => +n).every((num) => num % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
