export function newNumeralSystem(number: string): string[] {
  let result = [];
  let g = number.charCodeAt(0) - 65;

  for (let i = 0; i <= g; i++) {
    result.push(
      `${String.fromCharCode(i + 65)} + ${String.fromCharCode(g + 65)}`
    );
    g--;
  }

  return result;
}

console.log(newNumeralSystem("G")); //["A + G", "B + F", "C + E", "D + D"]
