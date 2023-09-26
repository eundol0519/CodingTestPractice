function solution(k, tangerine) {
  let answer = 0;
  let division = {};

  // ! 귤 사이즈가 중요한 게 아니라, 종류별 개수를 분류하고, k만큼 나누는 게 중요하다.

  // 사이즈별 개수 분류
  tangerine.forEach((item) =>
    division[item] >= 0 ? (division[item] += 1) : (division[item] = 1)
  );

  // 개수만 따로 빼서 내림차순으로 정렬
  const vals = Object.values(division).sort((a, b) => b - a);

  // vals를 돌면서 k에서 item을 빼준다.
  vals.forEach((item) => {
    if (k > 0) {
      k -= item;
      answer++;
    }
  });

  return answer;
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]); // 3
solution(4, [1, 3, 2, 5, 4, 5, 2, 3]); // 2
solution(2, [1, 1, 1, 1, 2, 2, 2, 3]); // 1
