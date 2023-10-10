function solution(length, text) {
  const result = [...text]
    .map((item) =>
      item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");

  return result;
}

solution(10, "goormLevel"); // "GOORMlEVEL"
solution(6, "commit"); // COMMIT
solution(1, "c"); // C

// 링크 : https://level.goorm.io/exam/174732/%EB%8C%80%EC%86%8C%EB%AC%B8%EC%9E%90-%EB%B0%94%EA%BE%B8%EA%B8%B0/quiz/1
// 해당 링크에서는 Node.js 버전으로 되어 있어서 JS용으로 작성하였습니다.
