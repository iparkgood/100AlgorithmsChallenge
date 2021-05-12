export function differentSymbolsNaive(s: string): number {
  let diff = [];

  [...s].forEach((char) => {
    if (!diff.includes(char)) diff.push(char);
  });

  return diff.length;
}

console.log(differentSymbolsNaive("cabca"));
