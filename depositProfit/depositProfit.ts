export function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let year = 0;
  let sum = deposit;

  while (sum < threshold) {
    sum = sum + sum * rate / 100;
    year++;
  }

  return year;
}

console.log(depositProfit(100, 20, 170)); //3
