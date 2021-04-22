export function alphabeticShift(inputString: string): string {
  const inputArr = inputString.split("");
  const alphabets: object = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a",
  };

  for (let i = 0; i < inputArr.length; i++) {
    inputArr[i] = alphabets[inputArr[i]];
  }

  return inputArr.join("");
}

console.log(alphabeticShift("crazy"));
