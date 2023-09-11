function solution(s, skip, index) {
  var answer = "";
  // skip에 있는 알파벳은 제외한 배열 필터링
  const en = [..."abcdefghijklmnopqrstuvwxyz"].filter(
    (item) => !skip.includes(item)
  );

  const result = [...s].map((item) => {
    // s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔준다.
    let itemIndex = en.indexOf(item) + index;

    // index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
    // → %를 사용하여 나머지 값을 en에 대입하여 문자열을 반환받는다.
    return en[itemIndex % en.length];
  });

  answer = result.join("");

  return answer;
}

solution("aukks", "wbqd", 5); // happy
solution("bcdefghijklmnopqrstuvwxyz", "a", 1); // cdefghijklmnopqrstuvwxyzb
solution("zzzzz", "bcdefghijk", 20); // nnnnn
