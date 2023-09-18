function nLettersBeforeString(my_string: string, n: number): string {
  let answer = "";

  answer = my_string
    .split("")
    .filter((item: string, i: number) => {
      if (i < n) {
        return item;
      }
    })
    .join("");

  // answer = my_string.substr(0, n);

  return answer;
}

nLettersBeforeString("ProgrammerS123", 11);
nLettersBeforeString("He110W0r1d", 5);
