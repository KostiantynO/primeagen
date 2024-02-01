export class MinHeap<T> {
  public length: number;
  public data: T[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: T): void {
    this.data[this.length] = value;
    this.bubbleUpFrom(this.length);
    this.length += 1;
  }

  delete(): T | undefined {
    if (this.length === 0) {
      return;
    }

    const [out] = this.data;
    this.length -= 1;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.sinkDownFrom(0);
    return out;
  }

  private bubbleUpFrom(childId: number): void {
    if (childId === 0) {
      return;
    }

    const parentId = this.parentId(childId);
    const parentValue = this.data[parentId];
    const childValue = this.data[childId];

    // in min heap we try to go up as far as we can
    if (parentValue > childValue) {
      this.data[childId] = parentValue;
      this.data[parentId] = childValue;

      this.bubbleUpFrom(parentId);
    }
  }

  private sinkDownFrom(parentId: number): void {
    const { length } = this;
    // Base Case
    if (parentId >= length) {
      return;
    }

    const leftId = this.leftChildId(parentId);
    const rightId = this.rightChildId(parentId);

    if (leftId >= length) {
      return;
    }

    const parentValue = this.data[parentId];
    const leftChildValue = this.data[leftId];
    const rightChildValue = this.data[rightId];

    if (leftChildValue > rightChildValue && parentValue > rightChildValue) {
      this.data[parentId] = rightChildValue;
      this.data[rightId] = parentValue;
      this.sinkDownFrom(rightId);
      return;
    }

    if (leftChildValue < rightChildValue && parentValue > leftChildValue) {
      this.data[parentId] = leftChildValue;
      this.data[leftId] = parentValue;
      this.sinkDownFrom(leftId);
      return;
    }
  }

  /** @example Get parent index for heapifyUp() and update() */
  private parentId(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChildId(idx: number): number {
    return 2 * idx + 1;
  }

  private rightChildId(idx: number): number {
    return 2 * idx + 2;
  }
}
