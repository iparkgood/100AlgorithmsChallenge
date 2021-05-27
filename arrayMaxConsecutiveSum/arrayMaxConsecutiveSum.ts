export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let max = 0;
  let sum = 0;

  for (let i = 0; i <= inputArray.length - k; i++) {
    sum = inputArray[i];

    for (let j = i + 1; j < i + k; j++) {
      sum += inputArray[j];
    }

    max = max > sum ? max : sum;
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6, 6], 3));
