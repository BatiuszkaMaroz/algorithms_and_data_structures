export {};

function findIndex(arr: number[], val: number) {
  const length = arr.length;
  let midIdx = Math.floor(arr.length / 2);

  while (true) {
    if (arr[midIdx] === val) {
      return midIdx;
    } else {
      let newIdx = midIdx;

      if (arr[midIdx] > val) {
        newIdx = Math.floor((0 + midIdx) / 2);
      } else if (arr[midIdx] < val) {
        newIdx = Math.floor((midIdx + length) / 2);
      }

      if (newIdx === midIdx) return -1;
      midIdx = newIdx;
    }
  }
}

const arr = [1, 2, 6, 7, 12];
const val = 12;
const res = findIndex(arr, val);
console.log(res);
