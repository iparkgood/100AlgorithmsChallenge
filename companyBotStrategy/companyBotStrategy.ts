export function companyBotStrategy(trainingData: number[][]): number {
  let sum = 0;
  let count = 0;

  trainingData.forEach(([answerTime, correctness]) => {
    if (correctness === 1) {
      sum += answerTime;
      count += correctness;
    }
  });

  return sum / count || 0;
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1],
  ])
);
