export {};

class QueueNode {
  val: any;
  prev: QueueNode | null = null;

  constructor(val: any) {
    this.val = val;
  }
}

class Queue {
  front: QueueNode | null = null;
  rear: QueueNode | null = null;
  size = 0;

  // ? unshift in ssl
  enqueue(val: any): Queue {
    const node = new QueueNode(val);

    if (this.size === 0) {
      this.rear = node;
      this.front = node;
    }

    if (this.size > 0) {
      this.rear!.prev = node;
      this.rear = node;
    }

    this.size++;
    return this;
  }

  // ? pop in ssl
  dequeue(): QueueNode | null {
    const node = this.front;

    if (node?.prev) {
      this.front = node.prev;
      this.size--;

      node.prev = null;
    } else {
      this.rear = null;
      this.front = null;
      this.size = 0;
    }

    return node;
  }
}

const q = new Queue();
q.enqueue(1).enqueue(2).enqueue(3);

// * INSERTION = O(1)
// * REMOVE = O(1)

// * FIFO - First In First Out

// ? ssl approach
// ? add to the front, remove from the rear for O(1)
