function solution(n) {
  var answer = 0;
  var i = n;

  while (i > 0) {
    i--;

    if (n % i === 1) {
      answer = i;
    }
  }

  return answer;
}

solution(10);
solution(12);
