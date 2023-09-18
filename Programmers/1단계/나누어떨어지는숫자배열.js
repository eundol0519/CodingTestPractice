function solution(arr, divisor) {
  let answer = arr.filter((item) => item % divisor === 0);

  answer = answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];

  return answer;
}

solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
solution([3, 2, 6], 10);
