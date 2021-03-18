export {};

class HashTable {
  constructor(
    public size = 52, //
    public keyMap = new Array(size),
  ) {}

  set(key: string, value: any) {
    const idx = this.hash(key);
    if (this.keyMap[idx]) {
      this.keyMap[idx].push([key, value]);
    } else {
      this.keyMap[idx] = [[key, value]];
    }
  }

  get(key: string) {
    const idx = this.hash(key);
    return this.keyMap[idx]?.find((elm: any) => elm[0] === key)?.[1];
  }

  keys() {
    return this.collect(0);
  }

  values() {
    return this.collect(1);
  }

  private collect(idx: number) {
    const res: any[] = [];

    for (const elm of this.keyMap) {
      if (elm) {
        elm.forEach((pair: any) => {
          res.push(pair[idx]);
        });
      }
    }

    return res;
  }

  private hash(key: string) {
    return key
      .split('')
      .slice(0, 100)
      .map((x) => x.charCodeAt(0))
      .reduce((cur, acc) => {
        return (acc + cur) % this.size;
      }, 0);
  }
}

const t = new HashTable();
t.set('pink', 'bred');
t.set('cyan', 'bred');
t.set('hi', 'bred');
t.set('novo', 'bred');
t.set('nova', 'bred');

console.log(t.get('pink'));
console.log(t.get('nova'));
console.log(t.get('ack'));

console.log(t.keys());
console.log(t.values());

// * INSERTION = O(1)
// * REMOVE = O(1)
// * ACCESS = O(1)

// ? hash table is object in JS, dict in Python
// ? array size should be prime number to decrase collision chance
