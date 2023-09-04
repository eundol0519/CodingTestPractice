function solution(babbling) {
  var answer = 0;
  const says = ["aya", "ye", "woo", "ma"]; // 조카가 할 수 있는 단어

  // 힌트 : replace()

  // 1. input 값을 반복한다.
  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    // 2. says를 반복한다.
    for (let j = 0; j < says.length; j++) {
      const say = says[j];

      // 3. input 값과 say의 값이 일치하는 지 확인한다.
      if (babble.includes(say)) {
        // -> 일치한다면 input 값에서 say의 값을 "-"로 치환한다.
        // ! 공복으로 치환하지 않는 이유 : 공복으로 치환하는 경우 wyeoo는 ye가 지워지면서 woo가 되고 woo도 지워지면서 count되기 떄문에 다른 문자로 치환한 것임
        babble = babble.replace(say, "-");
      }
    }

    // 4. says 반복문이 끝난 후 "-"를 모두 공백으로 치환한다.
    // g : 모든 영역에 대해 / i : 대소문자 상관없이
    babble = babble.replace(/-/gi, "");

    // 4. babble이 빈 값이라면 할 수 있는 말이기 때문에 answer에 +1 해준다.
    if (!babble) {
      // 공백이 되면 answer에 추가
      answer++;
    }
  }

  return answer;
}

const test = solution(["aya", "yee", "u", "maa", "wyeoo"]);
const test2 = solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);

console.log(test);
console.log(test2);
