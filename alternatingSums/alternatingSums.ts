export function alternatingSums(a: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;

  a.forEach((el, idx) => {
    idx % 2 === 0 ? (evenSum += el) : (oddSum += el);
  });

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
