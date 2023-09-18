function similarityOfArrays(s1: string[], s2: string[]): number {
  let answer: number = 0;

  answer = s2.filter((item: string) => {
    if (s1.includes(item)) {
      return item;
    }
  }).length;

  return answer;
}

similarityOfArrays(["a", "b", "c"], ["com", "b", "d", "p", "c"]);
similarityOfArrays(["n", "omg"], ["m", "dot"]);
