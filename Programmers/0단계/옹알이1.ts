function babbling1(babbling: string[]): number {
  let answer: number = 0;
  const says = ["aya", "ye", "woo", "ma"];

  for (let i: number = 0; i < babbling.length; i++) {
    let babble: string = babbling[i];

    for (let j: number = 0; j < says.length; j++) {
      const say = says[j];

      if (babble.includes(say)) {
        babble = babble.replace(say, "-");
      }
    }

    babble = babble.replace(/-/gi, "");

    if (!babble) {
      answer++;
    }
  }

  return answer;
}

babbling1(["aya", "yee", "u", "maa", "wyeoo"]);
babbling1(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);
