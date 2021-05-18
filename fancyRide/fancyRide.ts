export function fancyRide(l: number, fares: number[]): string {
  const cars = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

  for (let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * l <= 20) return cars[i];
  }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
