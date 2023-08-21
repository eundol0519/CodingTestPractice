function solution(s) {
  let answer = s;
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    answer = answer.replaceAll(item, i);
  }

  return +answer;
}

solution("one4seveneight");
solution("23four5six7");
solution("2three45sixseven");
solution("123");
