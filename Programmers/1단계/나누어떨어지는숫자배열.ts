function divisorNumberArr(arr: number[], divisor: number) {
  let answer = arr.filter((item: number) => item % divisor === 0);

  answer = answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];

  return answer;
}

divisorNumberArr([5, 9, 7, 10], 5);
divisorNumberArr([2, 36, 1, 3], 1);
divisorNumberArr([3, 2, 6], 10);
