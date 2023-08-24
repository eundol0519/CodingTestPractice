function solution(cards1, cards2, goal) {
  var answer = "Yes";

  for (item of goal) {
    if (cards1[0] === item) {
      cards1.shift();
    } else if (cards2[0] === item) {
      cards2.shift();
    } else {
      answer = "No";
    }
  }

  goal.forEach((item) => {
    if (cards1[0] === item) {
      cards1.shift();
    } else if (cards2[0] === item) {
      cards2.shift();
    } else {
      answer = "No";
    }
  });

  // forEach를 사용했을 때 실행결과가 for of를 사용했을 때보다 훨씬 빠름

  return answer;
}

solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
