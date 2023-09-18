function findMultiplesOfN(n: number, numlist: number[]) {
  let answer: number[] = [];

  answer = numlist.filter((item: number) => item % n === 0);

  return answer;
}

findMultiplesOfN(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
findMultiplesOfN(5, [1, 9, 3, 10, 13, 5]);
findMultiplesOfN(12, [2, 100, 120, 600, 12, 12]);
