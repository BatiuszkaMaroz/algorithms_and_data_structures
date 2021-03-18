export {};

// function reverse(str: string): string {
//   if (str.length === 1) return str[0];
//   return reverse(str.slice(1)) + str[0];
// }

// const res = reverse('kamilslimak');
// console.log(res);

// ************************************************** //

// function isPalindrome(str: string, depth: number = 0): boolean {
//   if (depth === str.length) return true;

//   const res = str[depth] === str[str.length - 1 - depth];

//   return res && isPalindrome(str, depth + 1);
// }

// const res = isPalindrome('kamilslimak');
// console.log(res);

// ************************************************** //

// function someRecursive(arr: number[], cb: (val: number) => boolean): boolean {
//   if (arr.length === 1) return cb(arr[0]);

//   return cb(arr[0]) || someRecursive(arr.slice(1), cb);
// }

// const res = someRecursive([4, 6, 8], (val) => val > 10);
// console.log(res);

// ************************************************** //

type Arr = any[];

// function flatten(arr: Arr): Arr {
//   let res: Arr = [];

//   if (arr.length === 0) {
//     return res;
//   }

//   if (arr[0] instanceof Array) {
//     res = flatten([...arr[0], ...arr.slice(1)]);
//   } else {
//     res = [arr[0], ...flatten(arr.slice(1))];
//   }

//   return res;
// }

function flatten(arr: Arr): Arr {
  let res: Arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      res = [...res, ...flatten(arr[i])];
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

const res = flatten([1, 2, 3, [4, 5, [1, 2]]]);
console.log(res);
