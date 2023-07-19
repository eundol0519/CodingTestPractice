function solution(cipher, code) {
  var answer = "";

  // cipher 문자열을 split("")으로 잘라서 문자 배열 생성
  const arr = cipher.split("");

  // 방법 1 : for문
  // 반복문 돌리기
  // 초기식 : 배수 첫번째 위치 / 조건식 : 암호 길이 / 증감식 : 하나씩 증가
  for (let i = code; i <= arr.length; i++) {
    // code의 배수 여부를 확인
    // 예) i가 4, 8, 12, 16일 경우 나머지가 0일 것이고, 14인 경우 나머지가 2일 것이기 때문에
    if (i % code === 0) {
      // index 값은 0부터 시작하기 때문에 arr[i - 1]의 값을 answer에 담아줌
      answer += arr[i - 1];
    }
  }

  // 방법 2 : filter()
  answer = arr
    .filter((item, i) => {
      // index 값은 0부터 시작하기 때문에 i + 0
      if ((i + 1) % code === 0) {
        return item;
      }
    })
    .join("");

  return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
console.log(solution("pfqallllabwaoclk", 2));
