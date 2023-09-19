function pickTwoAndAddThem(numbers: number[]) {
  let answer: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const num1 = numbers[i];
      const num2 = numbers[j];

      // index가 같지 않으면서 answer에 num1과 num2의 합을 push한다.
      if (i !== j) {
        answer.push(num1 + num2);
      }
    }
  }

  // new Set()을 사용하여 중복된 값 제거 && .sort((a, b) => a - b)를 사용하여 오름차순으로 정렬
  answer = [...new Set(answer)].sort((a, b) => a - b);

  return answer;
}
// map()이나 filter() 같은 배열 연산자는 numbers의 길이만큼만 연산을 진행하기 때문에 사용하지 못하고, 대신 2중 for문을 사용하였다.

pickTwoAndAddThem([2, 1, 3, 4, 1]);
pickTwoAndAddThem([5, 0, 2, 7]);
