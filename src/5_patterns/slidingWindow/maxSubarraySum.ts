export {};

// function maxSubarraySum(arr: number[], n: number): number {
//   if (n > arr.length) throw new Error();

//   let result = -Infinity;

//   for (let i = 0; i < arr.length - n + 1; i++) {
//     let innerResult = 0;

//     for (let j = 0; j < n; j++) {
//       innerResult += arr[i + j];
//     }

//     if (innerResult > result) {
//       result = innerResult;
//     }
//   }

//   return result;
// }

function maxSubarraySum(arr: number[], n: number): number {
  if (n > arr.length) throw new Error();

  let max = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    temp += arr[i];
  }

  max = temp;

  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}

const arr = [5, 4, 3, 2, 1, -200, 300];
const n = 2;

const res = maxSubarraySum(arr, n);
console.log(res);
