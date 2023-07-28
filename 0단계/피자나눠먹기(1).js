function solution(n) {
    var answer = 0;

    // 방법 1
    answer += Math.floor(n / 7) // 몫
    answer += Math.floor(n % 7) ? 1 : 0 // 나머지 : 나머지가 있으면 +1, 없으면 +0

    return answer;
}

console.log(solution(7))
console.log(solution(1))
console.log(solution(15))