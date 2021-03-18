export {};

function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function quickSort(
  arr: number[],
  start = 0,
  end = arr.length,
): number[] | void {
  const arrLength = end - start;
  if (arrLength <= 1) return;

  // * select element from the middle of the partition
  let pivotIdx = Math.floor(start + arrLength / 2);
  const pivot = arr[pivotIdx];

  // * move the pivot to the start of the partition
  swap(arr, start, pivotIdx);
  let swapIdx = start;

  // const pivot = arr[start];
  // let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    const cur = arr[i];

    if (cur < pivot) {
      swapIdx++;

      swap(arr, swapIdx, i);
    }
  }

  // * swap the pivot with the element after the last smaller
  swap(arr, start, swapIdx);

  // * start included, end excluded, pivot stays in place

  // ? smaller than pivot
  quickSort(arr, start, swapIdx);

  // ? bigger than pivot
  quickSort(arr, swapIdx + 1, end);

  return arr;
}

const arr = [10, 4353, 2134, 34, -12, -34234, 52];

const res = quickSort(arr);
console.log(res);

// * BEST = O(n log n)
// * AVG = O(n log n)
// * WORST = O(n^2)
// * SPACE = O(log n)
// ? Worst case when pivot is very small / big every time
// ? Bad performance when array have few uniques
