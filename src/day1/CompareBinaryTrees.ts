export const compareBinaryTrees = (
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean => {
  // structural check
  if (a === null && b === null) {
    return true;
  }

  // structural check
  if (a === null || b === null) {
    return false;
  }

  // value check
  if (a.value !== b.value) {
    return false;
  }

  return (
    compareBinaryTrees(a.left, b.left) && compareBinaryTrees(a.right, b.right)
  );
};
