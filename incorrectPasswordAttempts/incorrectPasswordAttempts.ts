export function incorrectPasscodeAttempts(
  passcode: string,
  attempts: string[]
): boolean {
  let count = 0;

  attempts.forEach((a) => {
    if (a !== passcode) count++;
    if (count < 10 && a === passcode) count = 0;
  });

  return count >= 10 ? true : false;
}

console.log(
  incorrectPasscodeAttempts("1111", [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
    "5555",
    "1111",
  ])
);
