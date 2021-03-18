export {};

// function power(base: number, exponent: number): number {
//   if (exponent === 0) return 1;

//   return base * power(base, exponent - 1);
// }

// const res = power(2, 2);
// console.log(res);

// ************************************************** //

// function factorial(n: number): number {
//   if (n === 0) return 1;

//   return n * factorial(n - 1);
// }

// const res = factorial(3);
// console.log(res);

// ************************************************** //

// function productOfArray(arr: number[]): number {
//   if (arr.length === 0) return 1;

//   return arr[0] * productOfArray(arr.slice(1));
// }

// const res = productOfArray([1, 2, 3]);
// console.log(res);

// ************************************************** //

// function recursiveRange(n: number): number {
//   if (n === 1) return 1;
//   return n + recursiveRange(n - 1);
// }

// const res = recursiveRange(6);
// console.log(res);

// ************************************************** //

function fib(n: number): number {
  if (n === 1 || n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

const res = fib(4);
console.log(res);
