function solution(n, numlist) {
  var answer = [];

  answer = numlist.filter((item) => item % n === 0);

  return answer;
}

solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
solution(5, [1, 9, 3, 10, 13, 5]);
solution(12, [2, 100, 120, 600, 12, 12]);
