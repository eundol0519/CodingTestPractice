function solution(num, k) {
  var answer = 0;

  answer = num.toString().indexOf(k) + 1 || -1;
  // → num.toString().indexOf(k)에 + 1을 한 이유 : index 값은 0부터 시작이기 때문에 + 1을 해줘서 기대하는 결과값에 맞춰줬다.
  // → num.toString().indexOf(k) + 1을 했을 때 0은 falsy한 값이기 때문에 false 구문으로 넘어간다.

  return answer;
}

solution(29183, 1);
solution(232443, 4);
solution(123456, 7);
