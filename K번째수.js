function solution(array, commands) {
  var answer = [];

  answer = commands.map((item) => {
    // i번째 숫자부터 j번째 숫자까지 배열 자르고 정렬하기
    const arr = [...array.slice(item[0] - 1, item[1])].sort((a, b) => a - b);

    // k번째에 있는 수 구하기
    return arr[item[2] - 1];
  });

  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
