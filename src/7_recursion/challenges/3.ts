export {};

// function capitalizeFirst(arr: string[]): string[] {
//   if (arr.length === 0) return [];

//   const capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);

//   return [capitalized, ...capitalizeFirst(arr.slice(1))];
// }

// const res = capitalizeFirst(['car', 'taco', 'banana']);
// console.log(res);

// ************************************************** //

// function nestedEvenSum(obj: { [x: string]: any }): number {
//   let result = 0;

//   for (const key in obj) {
//     const val = obj[key];

//     if (typeof val === 'number' && val % 2 === 0) {
//       result += val;
//     }

//     if (typeof val === 'object') {
//       result += nestedEvenSum(val);
//     }
//   }

//   return result;
// }

// const obj = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: 'car' },
// };

// const res = nestedEvenSum(obj);
// console.log(res);

// ************************************************** //

// function capitalizeWords(arr: string[]): string[] {
//   if (arr.length === 0) return [];

//   return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
// }

// const res = capitalizeWords(['i', 'am', 'learning', 'recursion']);
// console.log(res);

// ************************************************** //

// type AnyObject = { [x: string]: any };

// function stringifyNumbers(obj: AnyObject): AnyObject {
//   const res: AnyObject = {};

//   for (const key in obj) {
//     const val = obj[key];

//     if (typeof val === 'number') {
//       res[key] = val + '';
//     }

//     if (val instanceof Object && !(val instanceof Array)) {
//       res[key] = stringifyNumbers(val);
//     }
//   }

//   return { ...obj, ...res };
// }

// const obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// const res = stringifyNumbers(obj);
// console.log(res);

// ************************************************** //

type AnyObject = { [x: string]: any };

function collectStrings(obj: AnyObject): string[] {
  const res: string[] = [];

  for (const key in obj) {
    const val = obj[key];

    if (typeof val === 'string') {
      res.push(val);
    }

    if (val instanceof Object && !(val instanceof Array)) {
      res.push(...collectStrings(val));
    }
  }

  return res;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

const res = collectStrings(obj);
console.log(res);
