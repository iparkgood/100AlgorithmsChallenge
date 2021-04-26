export function arrayConversion(inputArray: number[]): number {
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }

  return inputArray[0];
}

function sumProduct(inputArray: number[], isOdd: boolean): number[] {
  let result: number[] = [];

  if (isOdd) {
    for (let i = 0; i < inputArray.length; i += 2) {
      result.push(inputArray[i] + inputArray[i + 1]);
    }
  } else {
    for (let i = 0; i < inputArray.length; i += 2) {
      result.push(inputArray[i] * inputArray[i + 1]);
    }
  }

  return result;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
