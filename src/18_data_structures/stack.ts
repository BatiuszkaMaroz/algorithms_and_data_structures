export {};

class StackNode {
  val: any;
  below: StackNode | null = null;

  constructor(val: any) {
    this.val = val;
  }
}

class Stack {
  top: StackNode | null = null;
  size = 0;

  push(val: any): Stack {
    const node = new StackNode(val);
    node.below = this.top;

    this.top = node;
    this.size++;

    return this;
  }

  pop(): StackNode | null {
    const node = this.top;

    if (node?.below) {
      this.top = node.below;
      this.size--;

      node.below = null;
    } else {
      this.top = null;
      this.size = 0;
    }

    return node;
  }
}

const stack = new Stack();
stack.push(1).push(2).push(3);

// * INSERTION = O(1)
// * REMOVE = O(1)

// * LIFO - Last In First Out

// ? ssl approach
// ? add to the start, remove from the start for O(1)
