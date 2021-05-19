export function findClosestPair(numbers: number[], sum: number): number {
  let distance = -1;

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const findSum = numbers[i] + numbers[j];
      const findDistance = Math.abs(i - j);
      
      if (findSum === sum) {
        if (distance === -1 || findDistance < distance) {
          distance = findDistance;
        }
      }
    }
  }

  return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
