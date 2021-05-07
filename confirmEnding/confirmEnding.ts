export function confirmEnding(str: string, target: string) {
  // return str.endsWith(target);
  // return str.substr(-target.length,target.length) === target;
  return str.substr(-target.length) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
