export function houseOfCats(legs: number): number[] {
  let howMany = [];

  if (Math.floor(legs / 4) !== 0) howMany.push(Math.floor(legs / 4));
  if (Math.floor(legs / 2) !== 0) howMany.push(Math.floor(legs / 2));

  return howMany;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
