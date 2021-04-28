export function bishopAndPawn(bishop: string, pawn: string): boolean {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const bishopX = board[bishop[0]];
  const bishopY = +bishop[1];
  const pawnX = board[pawn[0]];
  const pawnY = +pawn[1];

  if (
    bishopX + bishopY === pawnX + pawnY ||
    bishopX + pawnY === bishopY + pawnX
  ) {
    return true;
  }

  return false;
}

console.log(bishopAndPawn("a1", "c3"));
