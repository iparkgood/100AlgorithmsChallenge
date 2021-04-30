export function checkPalindrome(inputString: string): boolean {
    return inputString.toLowerCase() === inputString.toLowerCase().split("").reverse().join("");
}

console.log(checkPalindrome('aabaa')); //true
console.log(checkPalindrome('abac')); //false
console.log(checkPalindrome('a')); //true
