export function launchSequenceChecker(
  systemNames: string[],
  stepNumbers: number[]
): boolean {
  let systemsSteps = {};

  for (let i = 0; i < systemNames.length; i++) {
    if (systemsSteps.hasOwnProperty(systemNames[i])) {
      if (systemsSteps[systemNames[i]] >= stepNumbers[i]) {
        return false;
      }
      systemsSteps[systemNames[i]].push(stepNumbers[i]);
    } else {
      systemsSteps[systemNames[i]] = [stepNumbers[i]];
    }
  }

  return true;
}

console.log(
  launchSequenceChecker(
    ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
    [1, 10, 11, 2, 12, 111]
  )
);
console.log(
  launchSequenceChecker(
    ["stage_1", "stage_1", "stage_2", "dragon"],
    [2, 1, 12, 111]
  )
);
