function solution(numbers) {
  var answer = "";

  const en = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  answer = numbers;

  for (let i = 0; i < en.length; i++) {
    const item = en[i];
    // numbers 안에 en의 각 index의 값을 출력
    var index = answer.indexOf(item);

    // index 값이 있다면
    if (index > -1) {
      // 해당 영어를 숫자로 변환해서 문자열에 대입
      answer = answer.replace(item, i);
    }

    // 다른 블로그 참고
    answer = answer.split(item).join(i);
  }

  return answer;
}

console.log(solution("onetwothreefourfivesixseveneightnine"));
console.log(solution("onefourzerosixseven"));
