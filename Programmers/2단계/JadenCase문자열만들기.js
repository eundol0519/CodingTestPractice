function solution(s) {
  var answer = "";

  answer = s
    .split(" ")
    .map((item) => {
      let firstChar = item.charAt(0).toUpperCase();
      let others = item.slice(1).toLowerCase();

      return firstChar + others;
    })
    .join(" ");

  return answer;
}

solution("3people unFollowed me");
solution("for the last week");
