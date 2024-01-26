import { bsList } from '@code/BinarySearchList';

test('binary search array', function () {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(bsList(foo, 69)).toEqual(true);
  expect(bsList(foo, 1336)).toEqual(false);
  expect(bsList(foo, 69420)).toEqual(true);
  expect(bsList(foo, 69421)).toEqual(false);
  expect(bsList(foo, 1)).toEqual(true);
  expect(bsList(foo, 0)).toEqual(false);
});
