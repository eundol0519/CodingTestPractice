// 나의 풀이
function solution(absolutes, signs) {
  var answer = 0;

  answer = absolutes.reduce((acc, cur, i) => {
    if (signs[i]) {
      acc += cur;
    } else {
      acc -= cur;
    }

    return acc;
  }, 0);

  return answer;
}

solution([4, 7, 12], [true, false, true]);
solution([1, 2, 3], [false, false, true]);

// 다른 분의 풀이
function solution(absolutes, signs) {
  var answer = 0;

  answer = absolutes.reduce(
    (acc, cur, i) => acc + cur * (signs[i] ? 1 : -1),
    0
  );

  return answer;
}

solution([4, 7, 12], [true, false, true]);
solution([1, 2, 3], [false, false, true]);
