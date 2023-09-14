function solution(s) {
  let pCount = 0;
  let yCount = 0;

  [...s].forEach((item) => {
    item = item.toLowerCase();

    if (item === "p") {
      pCount++;
    } else if (item === "y") {
      yCount++;
    }
  });

  return pCount === yCount ? true : false;
}

solution("pPoooyY");
solution("Pyy");
