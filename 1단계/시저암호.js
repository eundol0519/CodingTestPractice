// 다른 분들의 풀이 - 아스키 코드를 활용한 방법
function solution(s, n) {
  const answer = s
    .split("")
    .map((string) => {
      const code = string.charCodeAt();
      if (97 <= code && code <= 122) {
        return String.fromCharCode(((code + n - 97) % 26) + 97);
      }

      if (65 <= code && code <= 90) {
        return String.fromCharCode(((code + n - 65) % 26) + 65);
      }

      return " ";
    })
    .join("");

  return answer;
}

// 배열 인덱스를 활용한 방법
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];

    // 빈 문자면 반복문 다음으로 넘김
    if (text == " ") {
      answer += " ";
      continue;
    }

    // text가 대문자이면 upper, 소문자면 lower를 textArr에 선언
    var textArr = upper.includes(text) ? upper : lower;
    // 문자열의 위치
    var index = textArr.indexOf(text) + n;

    // textArr의 길이보다 index가 크다면 index에서 textArr의 길이만큼 뺀다.
    if (index >= textArr.length) index -= textArr.length;

    // textArr 배열에서 index 위치에 있는 문자열을 반환한다.
    answer += textArr[index];
  }

  return answer;
}

// 다른 분들의 풀이 - 배열 인덱스를 활용한 방법
function solution(s, n) {
  let answer = "";

  const upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerArr = "abcdefghijklmnopqrstuvwxyz";

  answer = s
    .split("")
    .map((item) => {
      // 공백인 경우
      if (item === " ") {
        return " ";
      }

      // 대소문자 구별, 배열 인덱스 구하기
      const arr = item === item.toUpperCase() ? upperArr : lowerArr;
      let index = arr.indexOf(item) + n;

      // 배열 인덱스가 배열의 길이보다 크거나 같다면
      if (index >= arr.length) {
        // 배열 인덱스 - 배열의 길이만큼 빼준다.
        index -= arr.length; // index = index - arr.length
      }

      return arr[index];
    })
    .join("");

  return answer;
}

// 다른 분들의 풀이를 참고하여 다시 풀어본 나의 풀이 - for문 대신 배열 함수의 map을 사용
function solution(s, n) {
  let answer = "";

  const upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerArr = "abcdefghijklmnopqrstuvwxyz";

  answer = s
    .split("")
    .map((item) => {
      // 공백인 경우
      if (item === " ") {
        return " ";
      }

      // 대소문자 구별, 배열 인덱스 구하기
      const arr = item === item.toUpperCase() ? upperArr : lowerArr;
      let index = arr.indexOf(item) + n;

      // 배열 인덱스가 배열의 길이보다 크거나 같다면
      if (index >= arr.length) {
        // 배열 인덱스 - 배열의 길이만큼 빼준다.
        index -= arr.length; // index = index - arr.length
      }

      return arr[index];
    })
    .join("");

  return answer;
}

solution("AB", 1);
solution("z", 1);
solution("a B z", 4);

solution("AB", 1);
solution("z", 1);
solution("a B z", 4);
