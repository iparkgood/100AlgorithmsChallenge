export function electionsWinners(votes: number[], k: number): number {
  let count = 0;
  const max = Math.max(...votes);
  votes.sort((a, b) => b - a);

  if (votes[0] !== votes[1] && k === 0) {
    return 1;
  }

  votes.forEach((vote) => {
    if (max - vote < k) count++;
  });

  return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3)); //2
