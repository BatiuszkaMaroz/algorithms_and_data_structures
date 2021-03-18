// * Max Binary Heap
export {};

class BinaryHeap {
  values: number[] = [];

  insert(val: number) {
    this.values.push(val);
    if (this.values.length <= 1) return;

    this.bubbleUp();
  }

  extractMax() {
    if (this.values.length === 0) return;
    if (this.values.length === 1) {
      const max = this.values.pop();
      return max;
    }

    const max = this.values[0];
    const last = this.values.pop()!;
    this.values[0] = last;

    this.bubbleDown();

    return max;
  }

  bubbleDown() {
    let idx = 0;

    while (true) {
      let swapIdx;

      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;

      const cur = this.values[idx];
      const left = this.values[leftIdx];
      const right = this.values[rightIdx];

      if (left !== undefined && right !== undefined) {
        if (left > right && cur < left) {
          swapIdx = leftIdx;
        }

        if (left < right && cur < right) {
          swapIdx = rightIdx;
        }
      } else if (left !== undefined) {
        if (cur < left) {
          swapIdx = leftIdx;
        }
      }

      if (swapIdx === undefined) break;

      this.swap(idx, swapIdx);
      idx = swapIdx;
    }
  }

  bubbleUp() {
    let idx = this.values.length - 1;

    while (true) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.values[idx] > this.values[parentIdx]) {
        this.swap(idx, parentIdx);

        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  swap(idx1: number, idx2: number) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }

  log() {
    let i = 0;

    while (true) {
      const start = 2 ** i - 1;
      const end = 2 ** (i + 1) - 1;

      if (start > this.values.length - 1) break;

      console.log(this.values.slice(start, end));
      i++;
    }
  }
}

const heap = new BinaryHeap();

for (let i = 0; i < 17; i++) {
  heap.insert(i);
}

heap.extractMax();
heap.extractMax();
heap.log();

// ? For any index of array [n]

// ? L.child 2n + 1
// ? R.child 2n + 2

// ? Parent floor((n - 1) / 2)
