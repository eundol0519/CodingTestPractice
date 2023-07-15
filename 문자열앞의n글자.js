function solution(my_string, n) {
    var answer = '';

    // 방법 1 : split()을 사용해서 한글자씩 배열로 만들고 filter를 사용해서 n까지의 글자를 반환 후 join()으로 합치기
    answer = my_string.split("").filter((item, i) => {
        if (i < n) {
            return item
        }
    }).join("")

    // 방법 2 : subStr("시작 위치", "길이") 사용
    // 이외에도 substring, slice를 사용할 수 있다.
    answer = my_string.substr(0, n)

    return answer;
}

console.log(solution("ProgrammerS123", 11))
console.log(solution("He110W0r1d", 5))