function solution(s1, s2) {
  var answer = 0;

  // Array.filter()와 includes()를 사용한 방법
  answer = s2.filter((item) => {
    if (s1.includes(item)) {
      return item;
    }
  }).length;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
console.log(solution(["n", "omg"], [("m", "dot")]));
