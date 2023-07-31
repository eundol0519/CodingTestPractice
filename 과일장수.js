function solution(k, m, score) {
  var answer = 0;

  // k : 사과의 최대 점수
  // m : 한 상자에 들어가는 사과의 수
  // score : 사과들의 점수

  // 1. score % m을 했을 때 나머지가 있는 경우 나머지는 버린다.
  const remain = score.length % m;

  // 2. score를 정렬해서 위에서 계산한 나머지를 제외한 숫자를 필터링한다.
  const filterScore = score.sort().filter((item, i) => {
    //* 나머지가 없으면 다 반환
    if (remain === 0) {
      return item;
    }
    //* 나머지가 있으면서 나머지보다 큰 숫자만 반환
    else if (i >= remain) {
      return item;
    }
  });

  // 3. filterScore를 m씩 잘라서 새로운 배열 만들기
  const chunkScore = chunk(filterScore, m);

  // 4. 상자별 (가장 낮은 사과 점수 x 한 상자에 들어가는 사과의 수) 계산하기
  for (item of chunkScore) {
    //* Math.min()에 인자에는 숫자 나열이 들어가야 하기 때문에 배열인 item을 전개 연산자를 사용해서 인자로 넣어주었다.
    const min = Math.min(...item);
    answer += min * m;
  }

  return answer;
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);

//* 배열을 특정 개수씩 잘라서 새로운 배열 생성하는 함수
function chunk(data = [], size = 1) {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
}
