function solution(myString, pat) {
  var answer = "";

  const last = myString.lastIndexOf(pat);
  // lastIndexOf() : 주어진 값과 일치하는 부분을 fromIndex로 부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환한다.

  answer = myString.substr(0, last + pat.length);
  // substr() : 문자열의 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환한다.
  // 이때 특정 문자 수를 last + pat.length로 한 이유 : index는 0부터 시작하고, pat이 1보다 큰 경우 last에서는 맨 앞글자만 출력하기 때문에 last에 pat.length를 더해서 거기까지 잘라냈다.

  return answer;
}

solution("AbCdEFG", "dE");
solution("AAAAaaaa", "a");
