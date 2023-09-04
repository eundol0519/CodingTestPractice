function solution(d, budget) {
  // d : 부서별로 신청한 금액이 들어오는 배열
  // budget : 예산

  var answer = 0;
  var total = 0;

  // d를 오름차순으로 정렬한 후 반복문을 돌린다.
  for (item of d.sort((a, b) => a - b)) {
    // 조건문을 거치기 전에 total에 item(금액)을 더해준다.
    total += item;

    // total(총합)이 budget(예산)보다 작거나 같은 때만 answer에 +1을 해서 금액 지원 가능한 부서의 수를 센다.
    if (total <= budget) {
      answer++;
    }
  }

  return answer;
}

solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);
