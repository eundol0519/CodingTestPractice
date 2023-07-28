function solution(x, n) {
  var answer = [];

  answer = Array.from({ length: n }, (_, i) => (i + 1) * x);
  // index(= i)가 0부터 시작하기 때문에 (i + 1)에 * x를 해줘서 배열을 초기화 해주었다.

  return answer;
}

solution(2, 5);
solution(4, 3);
solution(-4, 2);
