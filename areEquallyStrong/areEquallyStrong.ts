export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const yourWeakest = yourLeft >= yourRight ? yourRight : yourLeft;
  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;
  const friendsWeakest =
    friendsLeft >= friendsRight ? friendsRight : friendsLeft;

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
