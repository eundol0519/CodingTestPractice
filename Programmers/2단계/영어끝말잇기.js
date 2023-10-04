function solution(n, words) {
  // 1) words를 n씩 잘라 2중 배열로 만든다.
  // 2) 1에서 진행한 결과값에 반복문을 돌려서 word가 2 글자 이상이거나 앞 word의 마지막 글자와 일치하는 지 확인한다.
  // 3) 2의 조건이 일치하면 넘어가고, 일치하지 않으면 answer에 [번호, 차례]를 반환한다.
  // + 틀린 사람이 없다면 [0, 0]을 반환해야 하기 때문에 answer에 초기값으로 [0, 0]을 할당했다.

  let lastWord = "";
  let firstWord = "";
  const visitedWords = [];
  words = chunk(words, n);

  for (let order = 0; order < words.length; order++) {
    const wordsInTurn = words[order];

    for (let number = 0; number < wordsInTurn.length; number++) {
      const word = wordsInTurn[number];

      // 차례마다 첫 번째 단어가 아니라면 단어의 첫 글자를 대입
      if (!(order === 0 && number === 0)) {
        firstWord = word.charAt(0);
      }

      const differentWords = lastWord !== firstWord;
      const insufficientWordLength = word.length < 2;
      const doubleCheck = visitedWords.includes(word);

      // 마지막 단어랑 첫 번째 단어가 다르거나, 단어의 길이가 2보다 작거나, 중복된 단어를 말한 경우 해당 번호와 차례를 answer에 대입
      if (differentWords || insufficientWordLength || doubleCheck) {
        return [number + 1, order + 1];
      }

      // 위 조건을 통과한 경우
      // - lastWord에 단어의 마지막 글자 대입
      // - visitedWords에 단어 추가
      lastWord = word.charAt(word.length - 1);
      visitedWords.push(word);
    }
  }

  return [0, 0];
}

const chunk = (data, size) => {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
};

solution(2, ["land", "dream", "mom", "mom", "ror"]);
solution(2, ["land", "dream", "mom", "mom"]);
solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);
solution(5, [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
]);
solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);
