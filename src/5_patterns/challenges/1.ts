// function sameFrequency(num1: number, num2: number) {
//   const str1 = num1.toString();
//   const str2 = num2.toString();
//   if (str1.length !== str2.length) return false;

//   const freq: { [x: string]: number } = {};

//   for (let i = 0; i < str1.length; i++) {
//     const digit = str1[i];
//     freq[digit] = (freq[digit] || 0) + 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     const digit = str2[i];

//     if (freq[digit] > 0) {
//       freq[digit] -= 1;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// const res = sameFrequency(34, 14);
// console.log(res);

function areThereDuplicates(...arr: any[]) {
  const freq: { [x: string]: any } = {};

  for (const arg of arr) {
    if (freq[arg]) {
      return true;
    } else {
      freq[arg] = 1;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 3));
