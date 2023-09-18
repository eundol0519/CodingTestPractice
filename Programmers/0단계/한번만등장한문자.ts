function charThatAppearsOnlyOnce(s: string): string {
  let answer: string = "";

  let result: object = {};
  const arr: string[] = s.split("");

  for (let i: number = 0; i < arr.length; i++) {
    if (Object.keys(result).includes(arr[i])) {
      result[arr[i]]++;
    } else {
      result[arr[i]] = 1;
    }
  }

  answer = Object.keys(result)
    .filter((item: string) => {
      if (result[item] === 1) {
        return item;
      }
    })
    .sort()
    .join("");

  return answer;
}

charThatAppearsOnlyOnce("abcabcadc");
charThatAppearsOnlyOnce("abdc");
charThatAppearsOnlyOnce("hello");
