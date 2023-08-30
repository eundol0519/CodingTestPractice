// 나의 풀이
function solution(numbers) {
  var answer = 0;

  for (let i = 0; i < 9; i++) {
    if (!numbers.includes(item)) {
      answer += item;
    }
  }

  return answer;
}

function solution(numbers) {
  var answer = 0;
  const arr = Array.from({ length: 10 }, (_, i) => i);

  arr.forEach((item) => {
    if (!numbers.includes(item)) {
      answer += item;
    }
  });

  return answer;
}

// 다른 분의 풀이
function solution(numbers) {
  var answer = -1;

  answer = 45 - numbers.reduce((acc, cur) => acc + cur, 0);

  return answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
solution([5, 8, 4, 0, 6, 7, 9]);
