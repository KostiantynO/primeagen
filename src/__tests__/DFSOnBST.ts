import { dfsOnBST } from '@code/DFSOnBST';
import { tree } from './tree';

test(dfsOnBST.name, () => {
  expect(dfsOnBST(tree, 45)).toEqual(true);
  expect(dfsOnBST(tree, 7)).toEqual(true);
  expect(dfsOnBST(tree, 69)).toEqual(false);
});
