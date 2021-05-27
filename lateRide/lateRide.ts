export function lateRide(n: number): number {
  const min = Math.floor(n / 60);
  const sec = n - min * 60;

  return [...(min.toString() + sec.toString())].reduce((sum, t) => sum + +t, 0);
}

console.log(lateRide(240));
console.log(lateRide(808));
