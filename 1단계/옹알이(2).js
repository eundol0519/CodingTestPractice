function solution(babblings) {
  var answer = 0;
  const canBabblings = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babblings.length; i++) {
    let babbling = babblings[i];

    for (let j = 0; j < canBabblings.length; j++) {
      const canBabbling = canBabblings[j];

      // 조카가 연속해서 같은 발음을 하는 걸 어려워하기 때문에
      // .repeat(2)를 사용하여 연속된 발음인 지 확인하고
      // 맞을 경우 break를 사용하여 반복문을 끊는다.
      if (babblings[i].includes(canBabbling.repeat(2))) {
        break;
      }

      // replaceAll()을 사용하여서 연속되지 않은 문자열을 모두 #으로 변환한다.
      // 이때 주의할 점⭐
      // "#" 대신 ""를 사용할 경우 canBabbling이 변환되면서 새로운 문자열이 파생될 수 있다.
      // ex) "ayayayae".replaceAll("aya", "") > "ye"가 되어 그 다음 반복문을 돌 때 "ye"로 인해 answer++ 될 수 있다.
      // 그런 상황을 방지하기 위해서는 변환할 때 임시 문자로 변환해주어야 한다.
      babbling = babbling.replaceAll(canBabbling, "#");
    }

    // 반복문이 끝난 후 임시로 사용한 #를 ""로 변환한 후 조건에 맞춰 answer++ 해준다.
    babbling.replaceAll("#", "").length === 0 && answer++;
  }

  return answer;
}

solution(["aya", "yee", "u", "maa"]);
solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
solution(["ayayayae"]);
