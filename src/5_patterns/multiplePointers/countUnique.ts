export {};

// function countUniqueNumbers(arr: number[]) {
//   const set = new Set(arr);
//   return set.size;
// }

// function countUniqueNumbers(arr: number[]) {
//   const unique: { [x: string]: any } = {};

//   arr.forEach((num) => {
//     unique[num] = true;
//   });

//   return Object.keys(unique).length;
// }

// ? only on sorted array
function countUniqueNumbers(arr: number[]) {
  let unique = 0;

  let lastValue;
  let pointer = 0;

  while (pointer < arr.length) {
    if (arr[pointer] !== lastValue) {
      lastValue = arr[pointer];
      unique++;
    }

    pointer++;
  }

  return unique;
}

const arr: any[] = [1, 1, 2, 3];

console.time();
const res = countUniqueNumbers(arr);
console.timeEnd();
console.log(res);
