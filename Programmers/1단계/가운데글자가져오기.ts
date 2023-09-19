function getMiddleLetter(s: string) {
  let answer: string = "";
  let startIndex: number = 0;

  // 문자열이 짝수인 지 홀수인 지 판단
  const evenOddType: number = s.length % 2;

  // 문자열이 홀수라면
  if (evenOddType === 1) {
    startIndex = Math.floor(s.length / 2);

    answer = s.slice(startIndex, startIndex + 1);
  }
  // 문자열이 짝수라면
  else {
    startIndex = s.length / 2 - 1;

    answer = s.slice(startIndex, startIndex + 2);
  }

  return answer;
}

getMiddleLetter("abcde");
getMiddleLetter("qwer");
