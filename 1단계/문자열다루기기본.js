// 첫 번째 시도
function solution(s) {
  var answer = true;

  answer = (s.length === 4 || s.length === 6) && !isNaN(+s);
  // "0x16"일 때 영문이 들어가는 숫자가 숫자로 인식되는 경우가 있어서 해당 테스트에서 true가 반한됨
  // 참고 : https://school.programmers.co.kr/questions/49912

  return answer;
}

solution("a234");
solution("1234");
solution("0x16");

// 두 번째 시도
function solution(s) {
  // 아래 if문에서 조건에 맞지 않는 경우 false를 대입해주는 코드가 없기 때문에 변수 생성 및 초기화 시 false로 값을 초기화 해주었다.
  var answer = false;

  if (s.length === 4 || s.length === 6) {
    // "0x16"이 숫자로 인식되지 않도록, split()를 사용하여서 문자 배열을 만들고,
    // 각 문자를 숫자로 변환했을 때(+item) NaN이 아니면(!isNaN()) true가 반환되도록 해주었고,
    // every를 사용하여 모든 반환값이 true일 때 결과적으로 true를 반환하도록 해주었다.
    answer = s.split("").every((item) => !isNaN(+item));
  }

  return answer;
}

solution("a234");
solution("1234");
solution("0x16");
