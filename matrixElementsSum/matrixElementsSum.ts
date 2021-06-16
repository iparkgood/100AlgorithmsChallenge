export function matrixElementsSum(matrix: any[][]): number {
  let count: number = 0;
  let colIdx: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        colIdx.push(j);
      } else if (!colIdx.includes(j)) {
        count += matrix[i][j];
      }
    }
  }

  return count;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);
