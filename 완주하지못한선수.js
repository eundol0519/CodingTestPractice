function solution(participant, completion) {
  var answer = "";

  // completion 배열의 길이를 하나씩 늘려서 participant와 맞춘다.
  completion[completion.length] = "";

  // 오름차순으로 정렬
  participant.sort();
  completion.sort();

  // participant를 반복문으로 돌린다.
  for (let i = 0; i < participant.length; i++) {
    // 두 값을 비교해서 다르면 participant[i]를 반환한다.

    if (participant[i] !== completion[i]) {
      answer = participant[i];
    }
  }

  return answer;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
