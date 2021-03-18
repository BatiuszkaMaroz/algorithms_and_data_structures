export {};

// function sumZero(arr: number[]) {
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];

//     for (let j = 0; j < arr.length; j++) {
//       if (j === i) continue;
//       const num2 = arr[j];

//       if (num + num2 === 0) {
//         return [num, num2];
//       }
//     }
//   }

//   return undefined;
// }

// ? only on array array
function sumZero(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const startVal = arr[left];
    const endVal = arr[right];

    if (startVal + endVal === 0) {
      return [startVal, endVal];
    }

    if (Math.abs(startVal) > Math.abs(endVal)) {
      left++;
    } else {
      right--;
    }
  }

  return undefined;
}

const arr = [-1000, -9, -5, 1, 5, 99, 101, 256];
console.log(sumZero(arr));
