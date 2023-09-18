function stringPushSolution(cipher: string, code: number): string {
  let answer: string = "";

  const arr: string[] = cipher.split("");

  for (let i: number = code; i <= arr.length; i++) {
    if (i % code === 0) {
      answer += arr[i - 1];
    }
  }

  // answer = arr
  //   .filter((item, i) => {
  //     if ((i + 1) % code === 0) {
  //       return item;
  //     }
  //   })
  //   .join("");

  return answer;
}

stringPushSolution("dfjardstddetckdaccccdegk", 4);
stringPushSolution("pfqallllabwaoclk", 2);
