export {};

class QueueNode {
  value: any;
  priority: number;

  constructor(value: any, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  values: QueueNode[] = [];

  enqueue(value: any, priority: number) {
    const node = new QueueNode(value, priority);
    this.values.push(node);

    if (this.values.length > 1) {
      this.bubbleUp();
    }
  }

  dequeue() {
    if (this.values.length === 0) return;
    if (this.values.length === 1) {
      const root = this.values.pop();
      return root;
    }

    const root = this.values[0];
    const last = this.values.pop()!;

    this.values[0] = last;
    this.bubbleDown();

    return root;
  }

  bubbleDown() {
    let idx = 0;

    while (true) {
      let swapIdx;

      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;

      // * priorities
      const cur = this.values[idx]?.priority;
      const left = this.values[leftIdx]?.priority;
      const right = this.values[rightIdx]?.priority;

      if (left !== undefined && right !== undefined) {
        // ? go left
        if (left <= right && cur > left) {
          swapIdx = leftIdx;
        }

        // ? go right
        if (right < left && cur > right) {
          swapIdx = rightIdx;
        }
      } else if (left !== undefined) {
        if (cur > left) {
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

      // * priorities
      const cur = this.values[idx]?.priority;
      const parent = this.values[parentIdx]?.priority;

      if (parent !== undefined && cur < parent) {
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

const q = new PriorityQueue();

for (let i = 0; i < 10; i++) {
  q.enqueue(Math.floor(Math.random() * 100), i);
}

q.dequeue();
q.dequeue();

q.log();

// ? For any index of array [n]

// ? L.child 2n + 1
// ? R.child 2n + 2

// ? Parent floor((n - 1) / 2)

// * INSERTION = O(log N)
// * REMOVAL = O(log N)
// * SEARCH = O(N)
