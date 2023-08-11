function solution(arr) {
  var answer = [];

  // 최솟값 구하기
  const min = Math.min(...arr);

  // reduce()를 사용한 경우
  answer = arr.reduce((acc, cur) => {
    if (cur !== min) {
      acc.push(cur);
    }

    return acc;
  }, []);

  // filter()를 사용한 경우
  answer = arr.filter((item) => item !== min && item);

  // 빈 배열인 경우 [-1]을 반환, 빈 배열이 아닌 경우 배열을 반환
  return answer.length > 0 ? answer : [-1];
}

solution([4, 3, 2, 1]);
solution([10]);
solution([10, 3, 5, 20, 2]);
