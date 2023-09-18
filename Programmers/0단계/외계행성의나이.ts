function ageOfExoplanets(age: number) {
  let answer: string = "";

  const en: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  for (let value of age.toString().split("")) {
    answer += en[value];
  }

  return answer;
}

ageOfExoplanets(23);
ageOfExoplanets(51);
ageOfExoplanets(100);
