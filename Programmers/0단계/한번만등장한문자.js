function solution(s) {
  var answer = "";

  let result = {};
  // 1. 문자열을 하나씩 잘라서 배열로 만든다.
  const arr = s.split("");

  // 2. 각 key(단어)마다 몇 개인 지 계산한다.
  for (let i = 0; i < arr.length; i++) {
    // - result에 해당 key 값이 있다면 value를 1씩 증가시킨다.
    if (Object.keys(result).includes(arr[i])) {
      result[arr[i]]++;
    }
    // - result에 해당 key 값이 없다면 key와 value = 1을 추가한다.
    else {
      result[arr[i]] = 1;
    }
  }

  // 3. 각 key(단어) 중 value(개수)가 1인 단어만 반환한다.
  answer = Object.keys(result)
    .filter((item, i) => {
      if (result[item] === 1) {
        return item;
      }
    })
    // 정렬
    .sort()
    // 배열을 문자열로 변환
    .join("");

  return answer;
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));
