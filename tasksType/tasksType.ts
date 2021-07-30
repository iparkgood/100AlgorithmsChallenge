export function tasksTypes(deadlines: number[], day: number): number[] {
  let [today, upcoming, later] = [0, 0, 0];

  for (const deadline of deadlines) {
    if (deadline <= day) {
      //if the task is due today or it's already overdue, it is labeled as Today
      today++;
    } else if (deadline > day && deadline <= 7 + day) {
      //if the task is due within a week but not today, it is labeled as Upcoming
      upcoming++;
    } else {
      //all other tasks are labeled as Later
      later++;
    }
  }

  return [today, upcoming, later];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
