export function arrayChange(inputArray: number[]): number {
  let count = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const diff = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i + 1] + diff;
      count += diff;
    }
  }

  return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([4, 2, 4]));
