function solution(s) {
  var answer = "";

  answer = s
    .split(" ") // ['try', 'hello', 'world']
    .map((string) => {
      return string
        .split("") // [['t', 'r', 'y'], ['h', 'e', 'l', 'l', 'o'], ['w', 'o', 'r', 'l', 'd']]
        .map(
          (char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
          // 짝수번째 문자열인 경우 대문자(toUpperCase())로, 홀수번째 문자열인 경우 소문자(toLowerCase())로 변환
        )
        .join(""); // 문자열 합치기
    })
    .join(" "); // 문자열 공백 넣어서 합치기

  return answer;
}

function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

solution("try hello world");
