function addAndDelFromAnEmptyArray(arr: number[], flag: boolean[]): number[] {
  let x: number[] = [];

  for (let i = 0; i < flag.length; i++) {
    const flagItem: boolean = flag[i];
    const arrItem: number = arr[i];

    if (flagItem) {
      const _arr: number[] = Array.from({ length: arrItem * 2 }, () => arrItem);

      x.push(..._arr);
    } else {
      x = x.filter((_, i: number) => i < x.length - arrItem);
    }
  }

  return x;
}

addAndDelFromAnEmptyArray([3, 2, 4, 1, 3], [true, false, true, false, false]);
