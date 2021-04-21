export function addTwoDigits(n: any): number {
    const numArr = n.toString().split('');

    return numArr.reduce((acc, num) => {
        return acc+= parseInt(num);
    }, 0);
}

console.log(addTwoDigits(29));