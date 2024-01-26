import { btbfs } from '@code/BTBFS';
import { tree } from './tree';

test(btbfs.name, () => {
  expect(btbfs(tree, 45)).toEqual(true);
  expect(btbfs(tree, 7)).toEqual(true);
  expect(btbfs(tree, 69)).toEqual(false);
});
