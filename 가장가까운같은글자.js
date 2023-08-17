// 나의 풀이
function solution(s) {
  var answer = [];

  answer = s.split("").reduce((acc, cur, i) => {
    // ! padEnd() 없어도 무방합니다.
    // 정의: s.slice(0, i) → slice(begin, end) 연산자를 사용해서 0부터 i까지 배열을 자른다. (얕은 복사)
    // 정의: padEnd(길이, 새로운 문자열) → 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환한다. 채워넣기는 대상 문자열의 끝(우측)부터 적용된다.
    // ex. cur: b, i: 0일 때 padEndArr는 ******, cur: a, i: 1일 때 padArr는 b***** ...가 된다.

    return [
      ...acc,
      padEndArr.lastIndexOf(cur) > -1 ? i - padEndArr.lastIndexOf(cur) : -1,
      // 정의: lastIndexOf() → 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여 최초로 마주치는 인덱스를 반환한다. 일치하는 부분이 없으면 -1을 반환한다.
      // ex. 자신보다 앞에 있는 문자가 있을 경우 해당 문자가 자신보다 몇 칸 앞에 있는 지 반환하는 문제이기 때문에 indexOf() 대신 lastIndexOf()를 사용하여서 역순으로 탐색하게 하였다.
      // > cur: a, i: 3일 때 padArr는 ban***이고, lastIndexOf()을 사용하면 1이 반환되고, cur: n, i: 4일 때 padArr는 banan*이고 lastIndexOf()를 사용하면 4이 반환되고,
      // 몇 칸 앞에 있는 지 판단하기 위해서 lastIndexOf()의 반환값이 -1이 아닌 경우에 i에서 위 과정에서 구한 lastIndexOf()의 반환값을 빼주면 된다.
    ];
  }, []);

  return answer;
}

// 다른 분의 풀이
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    // hash[v]에 값이 있으면 i(현재 index) - hash[v](겹치는 문자열의 index)를 반환, 없으면 -1

    hash[v] = i;
    // 문자의 index를 업데이트

    return result;
  });
}

solution("banana");
solution("foobar");
solution("abcda");
