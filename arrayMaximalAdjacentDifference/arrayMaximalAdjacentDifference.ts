export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let max = Math.abs(inputArray[0] - inputArray[1]);

  for (let i = 1; i < inputArray.length - 1; i++) {
    max =
      max > Math.abs(inputArray[i] - inputArray[i + 1])
        ? max
        : Math.abs(inputArray[i] - inputArray[i + 1]);
  }

  return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
