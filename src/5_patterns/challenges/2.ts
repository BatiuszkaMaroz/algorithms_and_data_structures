export {};

// function averagePair(arr: number[], avg: number): boolean {
//   if (arr.length < 2) return false;

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const result = (arr[left] + arr[right]) / 2;

//     if (result === avg) {
//       return true;
//     } else if (result > avg) {
//       right--;
//     } else {
//       left++;
//     }
//   }

//   return false;
// }

// const arr = [1, 2, 3];
// const avg = 2.5;

// const res = averagePair(arr, avg);
// console.log(res);

// function isSubsequence(sub: string, str: string): boolean {
//   let strIdx = 0;
//   let subIdx = 0;

//   while (strIdx < str.length) {
//     if (str[strIdx] === sub[subIdx]) {
//       subIdx++;
//     } else {
//       subIdx = 0;
//     }

//     strIdx++;
//     if (subIdx === sub.length) return true;
//   }

//   return false;
// }

function isSubsequence(sub: string, str: string): boolean {
  let strIdx = 0;
  let subIdx = 0;

  while (strIdx < str.length) {
    if (str[strIdx] === sub[subIdx]) {
      subIdx++;
    }

    strIdx++;
    if (subIdx === sub.length) return true;
  }

  return false;
}

const sub = 'hello';
const str = 'hello world';

const res = isSubsequence(sub, str);
console.log(res);
