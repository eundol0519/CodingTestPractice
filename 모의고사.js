function solution(answers) {
  var answer = [];
  // 상수를 변수화할 때는 대문자로 표기
  const SUPOPATTERNS = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let supoScores = [0, 0, 0];

  // 패턴
  // 수포자1 : 1, 2, 3, 4, 5
  // 수포자2 : 2, 1, 2, 3, 2, 4, 2, 5
  // 수포자3 : 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
  for (let i = 0; i < SUPOPATTERNS.length; i++) {
    const pattern = SUPOPATTERNS[i];

    for (let j = 0; j < answers.length; j++) {
      const supoAnswer = answers[j];

      // answer의 길이가 pattern보다 긴 경우를 대비하여 pattern[j % pattern.length]를 사용
      if (pattern[j % pattern.length] === supoAnswer) {
        supoScores[i]++;
      }
    }
  }

  // 각 수포자가 맞힌 문제 갯수(supoScores)를 비교해서 가장 많이 맞힌 수포자 배열 반환
  answer = supoScores.reduce((acc, cur, i) => {
    // 최대 점수와 비교해서 같으면 배열에 추가
    if (cur === Math.max(...supoScores)) {
      acc.push(i + 1);
    }

    return acc;
  }, []);

  return answer;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
