// 나의 풀이 : for문과 삼항연산자를 사용
function solution(price, money, count) {
  var answer = -1;
  let sum = 0;

  // 놀이기구 이용료 : price > 놀이기구를 N번째 이용할 때마다 요금을 N배만큼 받음
  // 현재 자신이 가지고 있는 금액 : money
  // 놀이기구 이용 횟수 : count

  for (let i = 1; i <= count; i++) {
    sum += i * price;
  }

  // 금액이 부족한 경우 차액을 반환 / 금액이 부족하지 않은 경우 0을 반환
  answer = sum > money ? sum - money : 0;

  return answer;
}

// 다른 사람의 풀이 : 가우스 공식을 사용
// 가우스 공식이란?
// : 연속된 두 항의 차가 일정한 등차수열의 합은 첫 항과 마지막 항을 더한 뒤 항의 개수를 곱하고 2로 나눈 값이다.
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;

  return tmp > 0 ? tmp : 0;
}

solution(3, 20, 4);
