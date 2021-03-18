export {};

function binarySearch(arr: number[], val: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);

    if (arr[pivot] < val) {
      left = pivot + 1;
    } else if (arr[pivot] > val) {
      right = pivot - 1;
    } else {
      return pivot;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6];
const res = binarySearch(arr, 4);
console.log(res);
