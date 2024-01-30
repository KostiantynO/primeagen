export const btbfs = (head: BinaryNode<number>, needle: number): boolean => {
  const q: (BinaryNode<number> | null)[] = [head];

  while (q.length) {
    const curr = q.shift();

    if (!curr) {
      continue;
    }

    const { value, left, right } = curr;

    // search
    if (value === needle) {
      return true;
    }

    q.push(left);
    q.push(right);
  }

  return false;
};
