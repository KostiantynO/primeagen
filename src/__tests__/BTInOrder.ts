import { btInOrder } from '@code/BTInOrder';
import { tree } from './tree';

test(btInOrder.name, () => {
  expect(btInOrder(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});
