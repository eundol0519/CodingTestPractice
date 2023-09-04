function solution(str1, str2) {
  var answer = 0;

  // 방법 1
  if (str1.includes(str2)) {
    answer = 1;
  } else {
    answer = 2;
  }

  console.log("??", str1.split(str2));

  // 방법 2
  if (str1.indexOf(str2) > -1) {
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(solution("ppprrrogrammers", "pppp"));
console.log(solution("AbcAbcA", "AAA"));
