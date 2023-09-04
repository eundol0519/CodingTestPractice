function solution(number) {
  var answer = 0;

  number.forEach((iItem, i) => {
    number.forEach((jItem, j) => {
      number.forEach((kItem, k) => {
        if (i !== j && j !== k && i !== k) {
          if (iItem + jItem + kItem === 0) {
            answer++;
          }
        }
      });
    });
  });

  return answer / 6;
}

// 다른 분의 풀이
function solution(number) {
  var answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
      for (let k = 0; k < number.length; k++) {
        if (i !== j && j !== k && i !== k) {
          if (number[i] + number[j] + number[k] === 0) {
            answer++;
          }
        }
      }
    }
  }

  return answer / 6;
}

solution([-2, 3, 0, 2, -5]);
solution([-3, -2, -1, 0, 1, 2, 3]);
solution([-1, 1, -1, 1]);
