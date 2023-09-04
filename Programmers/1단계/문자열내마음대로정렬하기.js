// 나의 풀이
function solution(strings, n) {
    let answer = [];

    // sort()는 문자열을 정렬하는 메소드이지만, 숫자를 정렬할 때는 .sort((a, b) => a > b ? 1 : -1)을 사용한다.
    // 이를 활용하여 문자열의 특정 인덱스 값의 문자를 비교하여 정렬을 하기 위해서 .sort((a, b) => a[n] > b[n] ? 1 : -1)을 사용하였고,
    // n의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 정렬하기 위하여 a[n] === b[n] && a > b : 1을 추가해주었다.
    answer = strings.sort((a, b) => a[n] > b[n] ? 1 : a[n] === b[n] && a > b ? 1 : -1);

    return answer;
}

// 다른 분의 풀이
function solution(strings, n) {
    let answer = [];

    // a[n] === b[n] : n번째 문자가 동일한 지 체크
    // 동일하면 a.localeCompare(b) 문자열을 비교하여 정렬
    // 동일하지 않으면 a[n].localeCompare(b[n]) n번쨰 문자를 비교하여 정렬
    // localeCompare()의 결과값은 1, -1로 반환된다.
    answer = strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));

    return answer
}

solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"], 2);