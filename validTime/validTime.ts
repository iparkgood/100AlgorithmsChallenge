export function validTime(time: string): boolean {
  const hour = time.slice(0, time.indexOf(":"));
  const minute = time.slice(time.indexOf(":") + 1);

  return +hour < 24 && +hour > 0 && +minute < 60 && +minute > 0;
}

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));
