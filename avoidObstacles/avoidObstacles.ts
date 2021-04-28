export function avoidObstacles(inputArray: number[]): number {
  const largestVal = Math.max(...inputArray);

  for (let i = 1; i <= largestVal + 1; i++) {
    if (inputArray.every((input) => input % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 9, 7]));
