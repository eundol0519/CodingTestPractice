function solution(n, a, b) {
  let round = 1;
  let bracket = Array.from({ length: n }, (_, i) => i + 1);
  let condition = [a, b];

  const bothParticipantsInCondition = (front, back) =>
    condition.includes(front) && condition.includes(back);

  while (round <= n / 2) {
    let bracketByRound = [];

    for (i = 0; i < bracket.length; i = i + 2) {
      const frontParticipant = bracket[i];
      const backParticipant = bracket[i + 1];

      if (bothParticipantsInCondition(frontParticipant, backParticipant)) {
        return round;
      } else {
        const winner = condition.includes(backParticipant)
          ? backParticipant
          : frontParticipant;

        bracketByRound.push(winner);
      }
    }

    bracket = bracketByRound;
    round++;
  }
}

console.log(solution(8, 4, 7)); // 3
console.log(solution(16, 7, 8)); // 1
