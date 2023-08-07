function solution(num) {
  let count = 0;

  // 조건 : 주어진 숫자가 1인 경우 0을 반환 + 작업을 500번 반복할 때까지 1이 되지 못하면 -1을 반환

  // num이 1이 아니면서 count가 500이 아닐 때까지만 반복
  while (num !== 1 && count !== 500) {
    // 1-1. 입력된 수가 짝수라면 2로 나눕니다.
    // 1-2. 입력된 수가 홀수하면 3을 곱하고 1을 더합니다.
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return num === 1 ? count : -1;
}

solution(6);
solution(16);
solution(626331);

function solution(num) {
  let answer = 0;
  let result = num;

  // 주어진 숫자(num)이 1인 경우 0을 반환
  if (num === 1) {
    answer = 0;
  } else {
    while (result !== 1) {
      // 1-1. 입력된 수가 짝수라면 2로 나눕니다.
      // 1-2. 입력된 수가 홀수하면 3을 곱합니다.
      result = result % 2 === 0 ? result / 2 : result * 3 + 1;
      answer++;

      if (answer >= 500) {
        answer = -1;
        break;
      }

      if (result === 1) {
        break;
      }
    }
  }

  return answer;
}

solution(6);
solution(16);
solution(626331);
