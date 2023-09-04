function solution(arr1, arr2) {
  var answer = [[]];

  // 행렬의 위치가 동일한 인덱스의 값을 더하는 문제이기 때문에 arr1에 map()을 두 번 사용하였고,
  // arr1의 index를 arr2에 대입하여 arr1의 값과 arr2의 값을 합하여 반환하였다.
  answer = arr1.map((item1, i1) => {
    return item1.map((item, i) => {
      return item + arr2[i1][i];
    });
  });

  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);

solution([[1], [2]], [[3], [4]]);
