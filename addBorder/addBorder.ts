export function addBorder(picture: string[]): string[] {
  const wall = "*".repeat(picture[0].length + 2);

  picture = picture.map((pic) => {
    return "*".concat(pic, "*");
  });

  picture.unshift(wall);
  picture.push(wall);

  return picture;
}

console.log(addBorder(["abc", "ded"]));
