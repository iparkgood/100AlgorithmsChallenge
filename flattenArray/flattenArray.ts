export function flattenArray(arr: any[]): any[] {
  //   return [...arr.toString()].filter((el) => el.match(/[^","]/g));
  let result = [];

  flatten(arr);

  function flatten(arr: any[]) {
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        return flatten(el);
      } else {
        result.push(el);
      }
    });
  }

  return result;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
