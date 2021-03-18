export {};

// function anagram(str1: string, str2: string) {
//   if (str1.length !== str2.length) return false;

//   const fq1: { [x: string]: number } = {};
//   const fq2: { [x: string]: number } = {};
//   const length = str1.length;

//   for (let i = 0; i < length; i++) {
//     fq1[str1[i]] = (fq1[str1[i]] || 0) + 1;
//     fq2[str2[i]] = (fq2[str2[i]] || 0) + 1;
//   }

//   for (let key in fq1) {
//     if (fq1[key] !== fq2[key]) return false;
//   }

//   return true;
// }

function anagram(str1: string, str2: string) {
  if (str1.length !== str2.length) return false;

  const lookup: { [x: string]: number } = {};
  const length = str1.length;

  for (let i = 0; i < length; i++) {
    const letter = str1[i];
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (let i = 0; i < length; i++) {
    const letter = str2[i];

    if (lookup[letter]) {
      lookup[letter]--;
    } else {
      return false;
    }
  }

  return true;
}

const str1 = 'abbakanowicz';
const str2 = 'babakanowicz';

const res = anagram(str1, str2);
console.log(res);
