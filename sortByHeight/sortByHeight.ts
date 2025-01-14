export function sortByHeight(a: number[]): number[] {
  const sortedArr = a.filter(x => x !== -1).sort();
  let idx = 0;
  
  for(let i = 0 ; i < a.length ; i++) {
    if(a[i] !== -1) {
      a[i] = sortedArr[idx];
      idx++;
    }
  }

  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));