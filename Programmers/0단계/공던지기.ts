function throwABallSolution(numbers: number[], k: number): number {
  let getBall = 1;

  for (let i = 0; i < k - 1; i++) {
    getBall += 2;

    if (getBall > numbers.length) {
      getBall -= numbers.length;
    }
  }

  return getBall;
}

throwABallSolution([1, 2, 3, 4], 2);
throwABallSolution([1, 2, 3, 4, 5, 6], 5);
throwABallSolution([1, 2, 3], 3);
