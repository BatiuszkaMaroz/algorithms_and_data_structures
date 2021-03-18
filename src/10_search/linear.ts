export {};

function linearSearch(arr: any[], val: any) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5];
const res = linearSearch(arr, 5);
console.log(res);
