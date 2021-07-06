export function reverseAString(str: string): string {
  return [...str].reverse().join("");
}

console.log(reverseAString("hello"));
console.log(reverseAString("Howdy"));
