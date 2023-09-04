// 나의 풀이
function solution(t, p) {
  var answer = 0;

  t.split("").forEach((_, i) => {
    let pLength = p.length;
    let tText = t.slice(i, i + pLength);

    if (tText.length === pLength && +tText <= +p) {
      answer++;
    }
  });

  return answer;
}

// 다른 분의 풀이
function solution(t, p) {
  var answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);

    if (+p >= +value) answer++;
  }

  return answer;
}

solution("3141592", "271");
solution("500220839878", "7");
solution("10203", "15");
