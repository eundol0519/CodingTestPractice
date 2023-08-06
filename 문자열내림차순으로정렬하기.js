function solution(s) {
    var answer = '';

    answer = s.split("").sort().reverse().join("")
    // split("")을 사용하여 문자열을 배열로 변환
    // sort()를 사용하여 작은 것 -> 큰 것으로 정렬
    // 문제에서는 큰 것 -> 작은 것 순으로 정렬하라고 했기 때문에 reverse()를 사용하여 뒤집음
    // 배열을 join("")을 사용하여 문자열로 변환

    return answer;
}

solution("Zbcdefg")


function solution(s) {
    return s.split("").sort((a, b) => a < b ? 1 : -1).join("")
}