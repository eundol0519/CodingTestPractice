function solution(s) {
  let answer = 0;
  let stack = [];

  // 홀수인 경우
  if ([...s].length % 2 === 1) return 0;

  // 짝수인 경우
  for (let x of s) {
    if (x === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  answer = stack.length === 0 ? 1 : 0;

  return answer;
}

solution("baabaa");
solution("cdcd");
