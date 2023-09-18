function stringWithinString(str1: string, str2: string): number {
  let answer: number = 0;

  if (str1.includes(str2)) {
    answer = 1;
  } else {
    answer = 2;
  }

  // if (str1.indexOf(str2) > -1) {
  //   answer = 1;
  // } else {
  //   answer = 2;
  // }

  return answer;
}

stringWithinString("ab6CDE443fgh22iJKlmn1o", "6CD");
stringWithinString("ppprrrogrammers", "pppp");
stringWithinString("AbcAbcA", "AAA");
