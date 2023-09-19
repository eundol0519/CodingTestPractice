function solution(s) {
  let answer = "";

  answer = Math.min(...s.split(" ")) + " " + Math.max(...s.split(" "));

  return answer;
}

solution("1 2 3 4");
solution("-1 -2 -3 -4");
solution("-1 -1");

function solution(s) {
  let answer = "";

  const sortResult = s.split(" ").sort((a, b) => a - b);

  answer = `${sortResult.at(0)} ${sortResult.at(-1)}`;
  // at() : 정수를 값으로 받아 배열의 해당 인덱스의 요소를 반환하는 메서드입니다.
  // 흔히 사용하는 대괄호 표기법([])과 유사하지만, 마지막 요소를 가져오고 싶을 때는 Array.at(-1)을 사용하여 쉽게 마지막 요소를 가져올 수 있습니다.

  return answer;
}

solution("1 2 3 4");
solution("-1 -2 -3 -4");
solution("-1 -1");
