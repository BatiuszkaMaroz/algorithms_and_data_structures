export {};

function stringSearch(str: string, sub: string): number {
  let occurrences = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) break;
      if (j === sub.length - 1) occurrences++;
    }
  }

  return occurrences;
}

const str = 'alina malina kalina kanalia malinamalina malin a malina';
const sub = 'malina';

const res = stringSearch(str, sub);
console.log(res);
