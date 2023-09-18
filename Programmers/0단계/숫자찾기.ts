function findNumber(num: number, k: number): number {
  let answer: number = 0;

  answer = num.toString().indexOf(String(k)) + 1 || -1;

  return answer;
}

findNumber(29183, 1);
findNumber(232443, 4);
findNumber(123456, 7);
