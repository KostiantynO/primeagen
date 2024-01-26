type StackNode<T> = {
  value: T;
  prev?: StackNode<T>;
};

export class Stack<T> {
  public length: number;
  private head?: StackNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node: StackNode<T> = { value: item };

    this.length += 1;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    const head = this.head;

    if (this.length === 0) {
      this.head = undefined;
      return head?.value;
    }

    this.head = head?.prev;
    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
