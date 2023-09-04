function solution(numbers, k) {
  // 공을 가지고 있는 사람 번호
  var getBall = 1;

  //* 조건식에 numbers.length를 넣으면 numbers.length가 k를 넘어가는 경우 계산이 안됨
  //* 조건식에 k를 넣으면 numbers.length에 상관없이 원하는 값을 얻을 때까지 반복문을 돌릴 수 있음

  // 마지막 공을 던질 선수를 찾기 위해 k-1 번까지 반복하며 다음 사람을 건너뛰도록 +2를 한다.
  // (getBall의 값이 1이고, 초기식에 i가 0이기 때문에 조건식에서는 i < k - 1을 해준다.)
  for (let i = 0; i < k - 1; i++) {
    getBall += 2;
    // 숫자가 1부터 +1된 숫자의 나열이기 때문에 k를 기준으로 반복문이 돌면 +2씩 해준다.

    // 마지막 번호를 넘어가는 경우 처음 선수에게 공이 전달되도록 배열의 크기만큼 뺀다.
    if (getBall > numbers.length) {
      getBall -= numbers.length;
    }
  }

  return getBall;
}

solution([1, 2, 3, 4], 2);
solution([1, 2, 3, 4, 5, 6], 5);
solution([1, 2, 3], 3);
