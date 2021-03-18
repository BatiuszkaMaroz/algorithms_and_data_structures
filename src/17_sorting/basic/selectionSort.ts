export {};

function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      const stored = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = stored;
    }
  }

  return arr;
}

const arr = [654, 23, 76, 0, 8, 432, 46];
const res = selectionSort(arr);
console.log(res);

// * BEST = O(n^2)
// * AVG = O(n^2)
// * WORST = O(n^2)
// * SPACE = O(1)
