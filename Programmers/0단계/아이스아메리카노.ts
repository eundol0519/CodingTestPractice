function iceAmericano(money: number) {
  let answer: number[] = [];

  answer.push(Math.floor(money / 5500));

  answer.push(money % 5500);

  return answer;
}

iceAmericano(5500);
iceAmericano(15000);
