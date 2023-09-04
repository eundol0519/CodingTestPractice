function solution(a, b) {
  let answer = "";

  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = `2016-${a}-${b}`;

  answer = day[new Date(date).getDay()];

  return answer;
}

solution(5, 24);
