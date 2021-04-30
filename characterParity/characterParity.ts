export function characterParity(symbol: string): string {
  return isNaN(+symbol) ? "not a digit" : +symbol % 2 === 0 ? "even" : "odd";
}

console.log(characterParity("5")); //"odd"
console.log(characterParity("8")); //"even"
console.log(characterParity("q")); //"not a digit"
