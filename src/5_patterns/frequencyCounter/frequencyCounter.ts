export {};

// function same(arr1: number[], arr2: number[]) {
//   const sorted1 = arr1.sort((a, b) => a - b);
//   const sorted2 = arr2.sort((a, b) => a - b);

//   return (
//     sorted1.length === sorted2.length &&
//     sorted1.every((val, idx) => val ** 2 === sorted2[idx])
//   );
// }

function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) return false;

  let freq1: { [x: string]: any } = {};
  let freq2: { [x: string]: any } = {};
  const length = arr1.length;

  for (let i = 0; i < length; i++) {
    freq1[arr1[i]] = (freq1[arr1[i]] || 0) + 1;
    freq2[arr2[i]] = (freq2[arr2[i]] || 0) + 1;
  }

  for (const key in freq1) {
    if (freq1[key] !== freq2[(+key) ** 2]) {
      return false;
    }
  }

  return true;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 1, 9, 16];

const res = same(arr1, arr2);
console.log(res);
