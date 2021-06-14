export function makeArrayConsecutive2(statues: number[]): number {
  let count = 0;

  statues.sort();

  for (let i = statues[0]; i <= statues[statues.length - 1]; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }

  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
