export function circleOfNumbers(n: number, firstNumber: number): number {
  let arr1 = [];
  let arr2 = [];

  for (let i = 1; i <= n / 2; i++) {
    arr1.push(i);
  }
  for (let j = n / 2 + 1; j <= n; j++) {
    arr2.push(j);
  }

  return arr2[arr1.indexOf(firstNumber)];

  //Instructor's code below

  // const numArr = [];
  // const half = n / 2;

  // for (let i = 0; i < n; i++) {
  //   numArr.push(i);
  // }

  // if (firstNumber < half) {
  //   return numArr[firstNumber + half];
  // }

  // return numArr[firstNumber - half];
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(14, 3));
