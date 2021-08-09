export function uniqueDigitProducts(a: number[]): number {
  let result = [];

  a.forEach((number) => {
    const productResult = product(number);
    if (!result.includes(productResult)) {
      result.push(productResult);
    }
  });

  return result.length;
}

function product(number) {
  return number
    .toString()
    .split("")
    .reduce((acc, el) => {
      return acc * +el;
    }, 1);
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
