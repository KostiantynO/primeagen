const walk = (curr: BinaryNode<number> | null, path: number[]): void => {
  // 1. Base Case
  if (!curr) {
    return;
  }

  // 2. Recursion
  // pre
  path.push(curr.value);

  // recurse (visit left hand side and then the right hand side)
  walk(curr.left, path);
  walk(curr.right, path);

  // post
};

export const btPreOrder = (head: BinaryNode<number>): number[] => {
  const path: number[] = [];
  walk(head, path);

  return path;
};
