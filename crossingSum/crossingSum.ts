export function crossingSum(matrix: number[][], a: number, b: number): number {
  const rowTotal = matrix[a].reduce((acc, el) => acc + el, 0);
  let colTotal = 0;

  for (let i = 0; i < matrix.length; i++) {
    colTotal += i !== a ? matrix[i][b] : 0;
  }

  return rowTotal + colTotal;
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
);
