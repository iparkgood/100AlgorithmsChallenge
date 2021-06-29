export function properNounCorrection(noun: string): string {
  return noun.charAt(0).toUpperCase() + noun.slice(1).toLowerCase();
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
