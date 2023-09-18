function sharingPizza(n: number): number {
  let answer: number = 0;

  answer += Math.floor(n / 7);
  answer += Math.floor(n % 7) ? 1 : 0;

  return answer;
}

sharingPizza(7);
sharingPizza(1);
sharingPizza(15);
