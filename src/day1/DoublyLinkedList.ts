type DoublyLinkedListNode<T> = {
  value: T;
  prev?: DoublyLinkedListNode<T>;
  next?: DoublyLinkedListNode<T>;
};

export class DoublyLinkedList<T> {
  public length: number;
  private head?: DoublyLinkedListNode<T>;
  private tail?: DoublyLinkedListNode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  // private debug() {
  //   let curr = this.head;
  //   let out = '';
  //   for (let i = 0, len = this.length; curr && i < len; i += 1) {
  //     // if (curr.value === item) {
  //     //   break;
  //     // }
  //     out += `${i} => ${curr.value}`;
  //     curr = curr.next;
  //     console.log({ curr, out });
  //   }
  //   console.log({ curr, out });
  // }

  prepend(item: T): void {
    const node: DoublyLinkedListNode<T> = { value: item };

    this.length += 1;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error('oh no');
    }

    if (idx === this.length) {
      this.append(item);
      return;
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    this.length += 1;
    const C = this.getAt(idx);

    if (!C) {
      throw new Error('no current C in doubly linked list node');
    }

    const F = {
      value: item,
      next: C,
      prev: C.prev,
    } satisfies DoublyLinkedListNode<T>;

    const B = C.prev;
    C.prev = F;

    if (B) {
      B.next = F;
    }
  }

  append(item: T): void {
    this.length += 1;

    const node: DoublyLinkedListNode<T> = { value: item };
    if (!this.tail) {
      this.head = this.tail = node;
      // this.debug();
      return;
    }

    node.prev = this.tail; // C <- (D)
    this.tail.next = node; // C -> (D)
    this.tail = node; // t = (D)
    // this.debug();
  }

  remove(item: T): T | undefined {
    let curr = this.head;

    for (let i = 0, len = this.length; curr && i < len; i += 1) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    return this.removeNode(curr);
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);
    if (!node) {
      return undefined;
    }
    return this.removeNode(node);
  }

  private removeNode(node: DoublyLinkedListNode<T>): T | undefined {
    this.length -= 1;
    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    // (B).A ?
    if (node.prev) {
      node.prev.next = node.next; // A -> C
    }

    // (B).C ?
    if (node.next) {
      node.next.prev = node.prev; // A <- C
    }

    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }

    node.prev = node.next = undefined;
    return node.value;
  }

  private getAt(idx: number): DoublyLinkedListNode<T> | undefined {
    let curr = this.head;
    for (let i = 0, len = this.length; curr && i < idx && i < len; i += 1) {
      curr = curr.next;
    }
    return curr;
  }
}
