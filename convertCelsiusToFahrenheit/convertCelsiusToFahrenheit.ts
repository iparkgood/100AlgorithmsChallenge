export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(-30)); //-22
console.log(celsiusToFahrenheit(-10)); //14
console.log(celsiusToFahrenheit(0)); //32
