function solution(money) {
  var answer = [];

  // 최대로 마실 수 있는 아메이카노 잔 수
  answer.push(Math.floor(money / 5500));

  // 남은 돈
  answer.push(money % 5500);

  return answer;
}

console.log(solution(5500));
console.log(solution(15000));
