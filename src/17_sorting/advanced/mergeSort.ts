export {};

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, pivot));
  const right = mergeSort(arr.slice(pivot));

  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      newArr.push(left[i]);
      i++;
    } else if (left[i] >= right[j]) {
      newArr.push(right[j]);
      j++;
    }
  }

  if (i < left.length) {
    newArr.push(...left.slice(i));
  } else if (j < right.length) {
    newArr.push(...right.slice(j));
  }

  return newArr;
}

const arr = [3, 543, 2, 435, 3, 31, 1];
const res = mergeSort(arr);
console.log(res);

// * BEST = O(n log n)
// * AVG = O(n log n)
// * WORST = O(n log n)
// * SPACE = O(n)
