export function findClosestPair(numbers: number[], sum: number): number {
  let distance = -1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === sum) {
        if (distance === -1 || distance > Math.abs(i - j)) {
          distance = Math.abs(i - j);
        }
      }
    }
  }

  return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
