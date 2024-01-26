import { btPreOrder } from '@code/BTPreOrder';
import { tree } from './tree';

test('Pre order', () => {
  expect(btPreOrder(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});
