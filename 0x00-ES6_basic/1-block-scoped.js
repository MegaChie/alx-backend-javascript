export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    const trig = 1;
    if (trig === 0) {
      console.log(task, task2);
    }
  }

  return [task, task2];
}
