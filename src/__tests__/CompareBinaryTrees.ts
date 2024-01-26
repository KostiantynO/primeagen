import { compareBinaryTrees } from '@code/CompareBinaryTrees';
import { tree, tree2 } from './tree';

test(compareBinaryTrees.name, () => {
  expect(compareBinaryTrees(tree, tree)).toEqual(true);
  expect(compareBinaryTrees(tree, tree2)).toEqual(false);
});
