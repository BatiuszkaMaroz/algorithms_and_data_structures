export {};

function radixSort(arr: number[]) {
  let buckets: number[][] = new Array(10).fill('').map(() => []);

  let helpArr = arr;
  let i = 0;

  while (true) {
    let finished = true;

    for (const num of helpArr) {
      const str = num.toString();
      const digit = +str[str.length - i - 1];

      if (!digit) {
        buckets[0].push(num);
        continue;
      }

      finished = false;
      buckets[digit].push(num);
    }

    if (finished) break;

    helpArr = buckets.flat();
    buckets = new Array(10).fill('').map(() => []);
    i++;
  }

  return helpArr;
}

const arr = [345, 2346, 77777777777, 22, 1, 65, 234];
const res = radixSort(arr);
console.log(res);

// * BEST = O(nk)
// * AVG = O(nk)
// * WORST = O(nk)
// * SPACE = O(n + k)
// ? n - length of array
// ? k - number of digits(avg)
// ! because of how pc stores numbers in memory, k becomes log n
