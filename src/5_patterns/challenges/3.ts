export {};

// function maxSubarraySum(arr: number[], n: number): number | null {
//   if (n > arr.length) return null;

//   let max = 0;
//   let temp = 0;

//   for (let i = 0; i < n; i++) {
//     temp += arr[i];
//   }

//   max = temp;

//   for (let i = n; i < arr.length; i++) {
//     temp = temp - arr[i - n] + arr[i];

//     if (temp > max) {
//       max = temp;
//     }
//   }

//   return max;
// }

// const arr = [100, 200];
// const num = 2;

// const res = maxSubarraySum(arr, num);
// console.log(res);

function minSubArrayLen(arr: number[], sum: number): number {
  let minLen = Infinity;

  let temp = 0;
  let i = 0;
  let j = 0;

  while (true) {
    if (i < arr.length && temp >= sum) {
      minLen = Math.min(minLen, j - i);

      temp -= arr[i];
      i++;
    } else if (j < arr.length) {
      temp += arr[j];
      j++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

const arr = [2, 3, 1, 2, 4, 3];
const sum = 7;

const res = minSubArrayLen(arr, sum);
console.log(res);
