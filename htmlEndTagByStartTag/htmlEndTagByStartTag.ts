export function htmlEndTagByStartTag(startTag: string): string {
  return "</" + startTag.split(" ")[0].match(/\w+/g) + ">";
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
