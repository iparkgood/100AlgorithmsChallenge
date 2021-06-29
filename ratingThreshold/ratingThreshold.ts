export function ratingThreshold(threshold: number, ratings: number[][]): number[] {
  const ave = ratings.map(rating => {
    const total = rating.reduce((acc, r) => {
      return (acc + r);
    }, 0)
    return total / rating.length;
  })

  for(let i = 0 ; i < ave.length ; i++) {
    if(ave[i] < threshold) {
      return [i];
    }
  }
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));