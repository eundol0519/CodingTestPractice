function solution(arr) {
  var answer = [];

  // 나의 풀이 : reduce() 사용
  // reduce()
  //   - 배열의 각 요소에 대해 사용자 제공 '리듀서' 콜백 함수를 순서대로 실행하고 이전 요소에 대한 계산의 반환 값을 전달합니다.
  //   - 배열의 모든 요소에서 리듀서를 실행한 최종 결과는 단일 값입니다.
  answer = arr.reduce((acc, cur, index) => {
    // acc(accumulator) : 누산기, 누적되는 값, 최종적으로 출력되는 값
    // cur(current) : 현재 돌고 있는 값
    // index : 현재 돌고 있는 값의 인덱스
    if (cur !== arr[index + 1]) {
      acc.push(cur);
    }

    return acc;
  }, []);
  // initial : acc의 초기값 (optional)

  // 다른 사람 풀이 : filter() 사용
  // if문이나 !==을 사용하면 0이 falsy한 값이기 때문에 정확한 테스트가 어려움
  answer = arr.filter((val, index) => {
    return val != arr[index + 1];
  });

  return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]);
solution([4, 4, 4, 3, 3]);
