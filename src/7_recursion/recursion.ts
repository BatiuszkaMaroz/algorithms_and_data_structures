export {};

// function factorial(n: number): number {
//   if (n === 1) return 1;

//   return n * factorial(n - 1);
// }

// const res = factorial(3);
// console.log(res);

// function collectOddValues(arr: number[]) {
//   let result: number[] = [];

//   function helper(arr: number[]): void {
//     if (arr.length === 0) return;

//     if (!!(arr[0] % 2)) result.push(arr[0]);

//     return helper(arr.slice(1));
//   }

//   helper(arr);
//   return result;
// }

function collectOddValues(arr: number[]): number[] {
  let result: number[] = [];

  if (arr.length === 0) return result;

  if (!!(arr[0] % 2)) result.push(arr[0]);

  return [...result, ...collectOddValues(arr.slice(1))];
}

const res = collectOddValues([55, 56, 57, 58, 59, 60, 61]);
console.log(res);
