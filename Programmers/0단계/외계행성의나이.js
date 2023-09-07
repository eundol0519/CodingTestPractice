function solution(age) {
  var answer = "";

  const en = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  for (value of age.toString().split("")) {
    answer += en[value];
  }

  return answer;
}

solution(23);
solution(51);
solution(100);
