function year2016(a: number, b: number) {
  let answer: string = "";

  const day: string[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date: string = `2016-${a}-${b}`;

  answer = day[new Date(date).getDay()];

  return answer;
}

year2016(5, 24);
