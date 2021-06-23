export function pagesNumberingWithInk(
  current: number,
  numberOfDigits: number
): number {
  while (current.toString().length <= numberOfDigits) {
    numberOfDigits -= current.toString().length;

    if (current.toString().length <= numberOfDigits) {
      current++;
    }
  }

  return current;
}

console.log(pagesNumberingWithInk(21, 5));
