export {};

class ListNode {
  val: any;
  next: ListNode | null = null;
  prev: ListNode | null = null;

  constructor(val: any) {
    this.val = val;
  }
}

class DoubleLinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  length = 0;

  get(idx: number): ListNode | null {
    if (idx < 0 || idx >= this.length) return null;

    const pivot = Math.floor(this.length / 2);

    if (idx >= pivot) {
      let count = this.length - 1;
      let node = this.tail;

      while (count > idx) {
        node = node!.prev;
        count--;
      }

      return node;
    } else {
      let count = 0;
      let node = this.head;

      while (count < idx) {
        node = node!.next;
        count++;
      }

      return node;
    }
  }

  set(idx: number, val: any): boolean {
    const node = this.get(idx);

    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(idx: number, val: any): boolean {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) return !!this.unshift(val);

    if (idx === this.length) return !!this.push(val);

    const newNode = new ListNode(val);
    const cur = this.get(idx)!;
    const prev = this.get(idx - 1)!;

    cur.prev = newNode;
    prev.next = newNode;

    newNode.next = cur;
    newNode.prev = prev;

    this.length++;
    return true;
  }

  remove(idx: number): ListNode | null {
    if (idx < 0 || idx >= this.length) return null;

    if (idx === 0) return this.shift();

    if (idx === this.length - 1) return this.pop();

    const cur = this.get(idx)!;
    const prev = cur.prev!;
    const next = cur.next!;

    prev.next = next;
    next.prev = prev;

    cur.prev = null;
    cur.next = null;

    this.length--;

    return cur;
  }

  push(val: any): DoubleLinkedList {
    const newNode = new ListNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.length > 0) {
      const tail = this.tail!;

      tail.next = newNode;
      newNode.prev = tail;

      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  unshift(val: any): DoubleLinkedList {
    const newNode = new ListNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.length > 0) {
      const head = this.head!;

      head.prev = newNode;
      newNode.next = head;

      this.head = newNode;
    }

    this.length++;
    return this;
  }

  pop(): ListNode | null {
    if (this.length === 0) return null;

    const tail = this.tail!;
    const newTail = tail.prev!;
    tail.prev = null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return tail;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    return tail;
  }

  shift(): ListNode | null {
    if (this.length === 0) return null;

    const head = this.head!;
    const newHead = head.next;
    head.next = null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return head;
    }

    this.head = newHead;
    this.length--;
    return head;
  }

  reverse(): DoubleLinkedList {
    const head = this.head!;
    this.head = this.tail;
    this.tail = head;

    let cur = head;

    while (cur) {
      const { prev, next } = cur;
      cur.prev = next;
      cur.next = prev;

      cur = next!;
    }

    return this;
  }
}

const list = new DoubleLinkedList();
list.push(10).push(20).push(30);
list.insert(0, 100);

list.reverse();

for (let i = 0; i < list.length; i++) {
  console.log(list.get(i)?.val);
}

// * INSERTION (front/end) = O(1)
// * INSERTION = O(n)

// * REMOVE (front/end) = O(1)
// * REMOVE = O(n)

// * SEARCH = O(n) (tech. O(n/2))
// * ACCESS = O(n)

// ? Better than arrays when insertion/deletion at the beggining is important
// ? No indexes
// ? Base for other data structures
