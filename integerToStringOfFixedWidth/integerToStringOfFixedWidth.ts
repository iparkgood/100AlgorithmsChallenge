export function integerToStringOfFixedWidth(number: number, width: number): string {
    if(number.toString().length < width) {
        return "0".repeat(width - number.toString().length) + number;
    }

    return number.toString().slice(-width);
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
