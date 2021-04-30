export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  const cell1FirstColor = board[cell1[0]] % 2 === 0 ? "black" : "white";
  const cell1SecondColor = +cell1[1] % 2 === 0 ? "black" : "white";
  const cell2FirstColor = board[cell2[0]] % 2 === 0 ? "black" : "white";
  const cell2SecondColor = +cell2[1] % 2 === 0 ? "black" : "white";

  return (
    cell1FirstColor === cell2FirstColor && cell2SecondColor === cell1SecondColor
  );
}

console.log(chessBoardCellColor("A1", "C3")); //true
console.log(chessBoardCellColor("A1", "H3")); //false
