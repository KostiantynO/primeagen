type LRUNode<T> = {
  value: T;
  next?: LRUNode<T>;
  prev?: LRUNode<T>;
};

const createNode = <V>(value: V): LRUNode<V> => ({ value });

export class LRU<K, V> {
  private length: number;
  private head?: LRUNode<V>;
  private tail?: LRUNode<V>;

  private lookup: Map<K, LRUNode<V>>;
  private reverseLookup: Map<LRUNode<V>, K>;

  constructor(private capacity: number = 10) {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map<K, LRUNode<V>>();
    this.reverseLookup = new Map<LRUNode<V>, K>();
  }

  update(key: K, value: V): void {
    let node = this.lookup.get(key);
    if (!node) {
      node = createNode(value);
      this.length += 1;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K): V | undefined {
    const node = this.lookup.get(key);
    if (!node) {
      return;
    }

    this.detach(node);
    this.prepend(node);
    return node.value;
  }

  private detach(node: LRUNode<V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = this.head.next;
    }

    if (this.tail === node) {
      this.tail = this.tail.prev;
    }

    node.next = node.prev = undefined;
  }

  private prepend(node: LRUNode<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trimCache(): void {
    const { length, capacity, tail } = this;
    if (length <= capacity || !tail) {
      return;
    }

    const key = this.reverseLookup.get(tail);
    if (key === undefined) return;

    this.detach(tail);
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length -= 1;
  }
}
