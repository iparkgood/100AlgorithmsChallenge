export function proCategorization(
  pros: string[],
  preferences: string[][]
): string[][][] {
  let pref = {};
  let category = [];

  for (let i = 0; i < preferences.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      if (!pref.hasOwnProperty(preferences[i][j])) {
        pref[preferences[i][j]] = [pros[i]];
      } else {
        pref[preferences[i][j]].push(pros[i]);
      }
    }
  }

  const sorted = [...Object.keys(pref)].sort();

  for (const key of sorted) {
    category.push([[key], pref[key]]);
  }

  return category;
}

console.log(
  proCategorization(
    ["Jack", "Leon", "Maria"],
    [
      ["Computer repair", "Handyman", "House cleaning"],
      ["Computer lessons", "Computer repair", "Data recovery service"],
      ["Computer lessons", "House cleaning"],
    ]
  )
);
//[ [ ["Computer lessons"], ["Leon", "Maria"]], [ ["Computer repair"], ["Jack", "Leon"]], [ ["Data recovery service"], ["Leon"]], [ ["Handyman"], ["Jack"]], [ ["House cleaning"], ["Jack", "Maria"]]]
