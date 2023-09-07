function solution(nums) {
  let answer = 0;
  // 최대로 가질 수 있는 종류
  const max = nums.length / 2;
  // 중복되지 않는 선에서 내가 가질 수 있는 종류
  const arr = [...new Set(nums)].length;

  // "내가 가질 수 있는 종류" > "최대로 가질 수 있는 종류" = "최대로 가질 수 있는 종류"
  // "내가 가질 수 있는 종류" < "최대로 가질 수 있는 종류" = "내가 가질 수 있는 종류"
  answer = arr > max ? max : arr;

  return answer;
}

solution([3, 1, 2, 1]);
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);
