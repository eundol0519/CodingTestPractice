function solution(number) {
  let result = [];
  // 오른쪽부터 시작
  let start = 0;
  // 왼쪽부터 시작
  let end = number - 1;

  for (let i = 1; i <= number; i++) {
    // 길이가 number이면서, 기본값이 0인 배열 생성
    let column = new Array(number).fill(0);

    // index가 start 또는 end와 같으면 i를 반환, 아니라면 item 반환
    column = column.map((item, j) => (j === start || j === end ? i : item));

    start++;
    end--;

    // i가 끝날 때마다 result에 column을 push
    result.push(column);
  }

  // 출력용
  result.forEach((item) => {
    console.log(item.join(""));
  });
  console.log("------------------------");
}

solution(4);
solution(5);
solution(9);

// 링크 : https://level.goorm.io/exam/167841/%EB%AC%B8%EC%A0%9C-%EB%B0%98%EB%B3%B5%EA%B3%BC-%EC%A1%B0%EA%B1%B4/quiz/1
// 해당 링크에서는 Node.js 버전으로 되어 있어서 JS용으로 작성하였습니다.
