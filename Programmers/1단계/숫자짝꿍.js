function solution(X, Y) {
  const xArr = countHandler(X);
  const yArr = countHandler(Y);

  let result = [];

  xArr.forEach((item, i) => {
    // xArr, yArr 모두에 해당 index가 있어야 진행
    if (item !== 0 && yArr[i] !== 0) {
      // 둘을 비교해서 작은 값을 저장
      const min = Math.min(item, yArr[i]);

      // i를 min만큼 반복해서 result에 추가
      result.push(String(i).repeat(min));
    }
  });

  // 아래에 있는 return을 삼항연산자로 구현할 경우 코드가 복잡해져서 if문을 사용하는 게 훨씬 깔끔함
  // - 공통된 부분이 없는 경우
  if (result.length === 0) {
    return "-1";
  }
  // - 0만 공통된 경우
  else if (Number(result.join()) === 0) {
    return "0";
  }

  // - 나머지
  // : reverse()를 사용하여 내림차순으로 정렬
  return result.reverse().join("");
}

function countHandler(arr) {
  // 0 ~ 9(index) 배열 생성
  let countArr = new Array(10).fill(0);

  arr.split("").forEach((item) => {
    // 문자(item)와 countArr[index]가 겹치는 부분에 + 1(++)
    countArr[item]++;
  });

  return countArr;
}

solution("100", "2345"); // -1
solution("100", "203045"); // 0
solution("100", "123450"); // 10
solution("12321", "42531"); // 321
solution("5525", "1255"); // 552
solution("1254", "12557887545"); // 5421
solution("12557887545", "1254"); // 5421
solution("23255", "14223"); // 322
