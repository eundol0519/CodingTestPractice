function solution(name, findNames) {
  let count = 0;

  count = findNames.filter((item) => item.includes(name)).length;
}

solution("fred", ["sam", "fredy", "fredi", "ilium"]); // 2
solution("dalgu", ["dalgu", "bendjamin", "oscar", "goormee"]); // 1

// 링크 : https://level.goorm.io/exam/159181/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%A8%BC%EB%8D%B0%EC%9D%B4-%EB%8F%99%EB%AA%85%EC%9D%B4%EC%9D%B8/quiz/1
// 해당 링크에서는 Node.js 버전으로 되어 있어서 JS용으로 작성하였습니다.
