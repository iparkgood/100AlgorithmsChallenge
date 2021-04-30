export function characterParity(symbol: string): string {
  if (isNaN(+symbol)) {
    return "not a digit";
  } else {
    return +symbol % 2 === 0 ? "even" : "odd";
  }
}

console.log(characterParity("5")); //"odd"
console.log(characterParity("8")); //"even"
console.log(characterParity("q")); //"not a digit"
