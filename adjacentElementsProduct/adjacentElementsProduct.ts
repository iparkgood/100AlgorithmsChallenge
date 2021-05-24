export function adjacentElementsProduct(inputArray: number[]): number {
  let max = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    max =
      max < inputArray[i] * inputArray[i + 1]
        ? inputArray[i] * inputArray[i + 1]
        : max;
  }

  return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
