export {};

function findLongestSubstring(str: string): number {
  let current = '';
  let result = '';

  let i = 0;
  let j = 0;

  while (j < str.length) {
    const letter = str[j];

    if (current.includes(letter)) {
      i++;
    } else {
      j++;
    }

    current = str.slice(i, j);
    if (current.length > result.length) {
      result = current;
    }
  }

  return result.length;
}

const str = 'longestsubstring';
const res = findLongestSubstring(str);
console.log(res);
