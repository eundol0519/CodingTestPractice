// ** for문을 사용한 방법
function solution(name, yearning, photo) {
  // name : 그리워하는 사람의 이름을 담은 문자의 배열
  // yearning : 각 사람별 그리움 점수를 담은 정수 배열
  // photo : 각 사진이 찍힌 인물의 이름을 담은 문자의 배열

  // - photo의 길이만큼 배열을 선언하고 0으로 초기화 해준다.
  var answer = Array.from({ length: photo.length }, () => 0);

  // photo를 반복문으로 돌려서 각 인덱스에 있는 배열을 photoItem 변수에 대입한다.
  for (let i = 0; i < photo.length; i++) {
    const photoItem = photo[i];

    // name을 반복문으로 돌려서 각 인덱스에 있는 문자열을 nameItem 변수에 대입한다.
    for (let j = 0; j < name.length; j++) {
      const nameItem = name[j];

      answer[i] +=
        // *photoItem에 nameItem이 있다면?
        // : name(이름 배열)에서 nameItem의 인덱스 자리를 반환받고, 해당 인덱스 자리를 yearning(점수 배열)에 대입하여 반환받은 점수를 answer[i]에 더해준다.
        // *photoItem에 nameItem이 없다면?
        // : answer[i]에 0을 더해준다.
        photoItem.indexOf(nameItem) > -1 ? yearning[name.indexOf(nameItem)] : 0;
    }
  }

  return answer;
}

// ** map과 reduce를 사용한 방법
function solution(name, yearning, photo) {
  // name : 그리워하는 사람의 이름을 담은 문자의 배열
  // yearning : 각 사람별 그리움 점수를 담은 정수 배열
  // photo : 각 사진이 찍힌 인물의 이름을 담은 문자의 배열

  var answer = [];

  // photo를 map을 사용하여 반복문을 돌린다.
  answer = photo.map((item) =>
    // item(사진 배열)에 reduce를 사용하여 총합을 계산한다.
    // 이때 yearning[name.indexOf(curr)]이 없으면(||) 0을 더해준다.
    item.reduce((acc, curr) => (acc += yearning[name.indexOf(curr)] || 0), 0)
  );

  return answer;
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);
solution(
  ["kali", "mari", "don"],
  [11, 1, 55],
  [
    ["kali", "mari", "don"],
    ["pony", "tom", "teddy"],
    ["con", "mona", "don"],
  ]
);
solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
);
