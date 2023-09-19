function findNumber(n: number) {
  let answer: number = 0;
  let i: number = n;

  while (i > 0) {
    i--;

    if (n % i === 1) {
      answer = i;
    }
  }

  return answer;
}

findNumber(10);
findNumber(12);
