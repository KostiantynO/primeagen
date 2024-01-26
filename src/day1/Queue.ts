type QueueNode<T> = {
  value: T;
  next?: QueueNode<T>;
};

export class Queue<T> {
  public length: number;
  private head?: QueueNode<T>;
  private tail?: QueueNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node: QueueNode<T> = { value: item };

    this.length += 1;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) return;

    this.length -= 1;

    const { head } = this;
    this.head = this.head.next;

    // free

    head.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
