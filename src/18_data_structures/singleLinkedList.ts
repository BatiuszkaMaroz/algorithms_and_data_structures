export {};

class ListNode {
  val: any;
  next: ListNode | null = null;

  constructor(val: any) {
    this.val = val;
  }
}

class SinglyLinkedList {
  private head: ListNode | null = null;
  private tail: ListNode | null = null;
  length = 0;

  get(idx: number): ListNode | null {
    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      if (current?.next) {
        current = current.next;
      }
    }

    return current;
  }

  set(idx: number, val: any): boolean {
    const current = this.get(idx);

    if (current) {
      current.val = val;
      return true;
    }

    return false;
  }

  insert(idx: number, val: any): boolean {
    if (idx === 0) {
      return !!this.unshift(val);
    }

    if (idx === this.length) {
      return !!this.push(val);
    }

    const pre = this.get(idx - 1);

    if (pre) {
      const newNode = new ListNode(val);

      newNode.next = pre.next;
      pre.next = newNode;
      this.length++;

      return true;
    } else {
      return false;
    }
  }

  remove(idx: number): boolean {
    if (idx === 0) {
      return !!this.shift();
    }

    if (idx === this.length - 1) {
      return !!this.pop();
    }

    const pre = this.get(idx - 1);
    const next = this.get(idx + 1);

    if (pre && next) {
      pre.next = next;
      this.length--;

      return true;
    } else {
      return false;
    }
  }

  push(val: any): SinglyLinkedList {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  unshift(val: any): SinglyLinkedList {
    const current = this.head;
    const newNode = new ListNode(val);

    if (current) {
      newNode.next = current;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(): ListNode | null {
    if (this.length === 0) return null;

    const tail = this.tail!;
    tail.next = null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return tail;
    }

    const newTail = this.get(this.length - 2)!;
    newTail.next = null;
    this.tail = newTail;

    this.length--;
    return tail;
  }

  shift(): ListNode | null {
    if (this.length === 0) return null;

    const current = this.head;
    const newHead = current?.next;

    if (newHead) {
      this.head = newHead;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return current?.val;
  }

  reverse(): SinglyLinkedList {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = current!.next;
      current!.next = prev;

      prev = current;
      current = next!;
    }

    return this;
  }

  print() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.get(i)?.val);
    }
  }
}

const list = new SinglyLinkedList();
list.push(1).push(2).push(4).push(8).push(16);
list.pop();

list.reverse();
list.print();

// * INSERTION (front) = O(1)
// * INSERTION = O(n)

// * REMOVE (front) = O(1)
// * REMOVE = O(n)

// * SEARCH = O(n)
// * ACCESS = O(n)

// ? Better than arrays when insertion/deletion at the beggining is important
// ? No indexes
// ? Base for other data structures
