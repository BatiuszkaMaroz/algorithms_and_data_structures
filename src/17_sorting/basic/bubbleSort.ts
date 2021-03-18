export {};

function bubbleSort(arr: number[]) {
  // ? i - length of unsorted array
  for (let i = arr.length - 1; i > 0; i--) {
    let swap = false;

    for (let j = 0; j < i; j++) {
      const first = arr[j];
      const second = arr[j + 1];

      if (first > second) {
        arr[j] = second;
        arr[j + 1] = first;
        swap = true;
      }
    }

    if (!swap) break;
  }

  return arr;
}

const arr = [77, 77, 5, 62, 1];
const res = bubbleSort(arr);
console.log(res);

// * BEST = O(n)
// * AVG = O(n^2)
// * WORST = O(n^2)
// * SPACE = O(1)
