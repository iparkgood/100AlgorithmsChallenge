export function alphabeticShift(inputString: string): string {
  return [...inputString]
    .map((input) => {
      return String.fromCharCode(input.charCodeAt(0) + 1);
    })
    .join("")
    .replace(/\W/, "a");
}

console.log(alphabeticShift("crazy"));
