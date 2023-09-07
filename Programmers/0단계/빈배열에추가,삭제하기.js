function solution(arr, flag) {
  var x = [];

  for (let i = 0; i < flag.length; i++) {
    const flagItem = flag[i];
    const arrItem = arr[i];

    // true일 경우 > x 뒤에 arrItem * 2번 추가
    if (flagItem) {
      // Array.from({ length: 원하는 길이 }, () => 원하는 값)를 사용하여 임시 배열을 생성하고
      const _arr = Array.from({ length: arrItem * 2 }, () => arrItem);

      // 전개 연산자를 사용하여 x에 반영
      x.push(..._arr);
    }
    // false일 경우 > x에서 마지막 arrItem개의 원소를 제거
    else {
      // filter 연산자를 사용하여서 배열의 index가 x.length - arrItem 보다 작은 것들만 필터링 해준다.
      x = x.filter((_, i) => i < x.length - arrItem);
    }
  }

  return x;
}

solution([3, 2, 4, 1, 3], [true, false, true, false, false]);
