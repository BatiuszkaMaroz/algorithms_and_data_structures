export {};

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    let idx = i - 1;

    while (idx > -1 && cur < arr[idx]) {
      // ? Move element to cur's old location.
      arr[idx + 1] = arr[idx];

      idx--;
    }

    arr[idx + 1] = cur;
  }

  return arr;
}

const arr = [3, 2, 1];
const res = insertionSort(arr);
console.log(res);

// * BEST = O(n)
// * AVG = O(n^2)
// * WORST = O(n^2)
// * SPACE = O(1)
