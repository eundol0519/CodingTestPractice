function solution(n) {
  let answer = 1;

  for (let i = 1; i < n; i++) {
    let sum = 0;
    let j = i;

    while (sum < n) {
      sum += j;
      j++;
    }

    if (sum === n) answer++;
  }

  return answer;
}

solution(15); // 4
solution(10); // 2
