function solution(phone_number) {
    var answer = '';

    answer = phone_number.split("").map((item, i) => i < phone_number.length - 4 ? "*" : item).join("")
    // i < phone_number.length - 4 : 끝까지 4자리는 false, 나머지는 true


    answer = "*".repeat(phone_number - 4) + phone_number.slide(-4)

    return answer;
}

solution("010333344444")
solution("027778888")