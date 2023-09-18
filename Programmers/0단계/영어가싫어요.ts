function iHateEnglish(numbers: string): string {
  let answer: string = "";

  const en = [
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
    "ten",
  ];

  answer = numbers;

  for (let i: number = 0; i < en.length; i++) {
    const item: string = en[i];
    var index = answer.indexOf(item);

    if (index > -1) {
      answer = answer.replace(item, String(i));
    }

    answer = answer.split(item).join(String(i));
  }

  return answer;
}

iHateEnglish("onetwothreefourfivesixseveneightnine");
iHateEnglish("onefourzerosixseven");
