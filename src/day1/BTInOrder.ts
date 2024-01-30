const walk = (curr: BinaryNode<number> | null, path: number[]): void => {
  // 1. Base Case
  if (!curr) {
    return;
  }

  // 2. Recursion
  // pre

  // recurse (visit left hand side and then the right hand side)
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  // post
};

export const btInOrder = (head: BinaryNode<number>): number[] => {
  const path: number[] = [];
  walk(head, path);

  return path;
};
