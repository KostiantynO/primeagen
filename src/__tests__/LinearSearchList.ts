import { linearSearchList } from '@code/LinearSearchList';

test(linearSearchList.name, () => {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(linearSearchList(foo, 69)).toEqual(true);
  expect(linearSearchList(foo, 1336)).toEqual(false);
  expect(linearSearchList(foo, 69420)).toEqual(true);
  expect(linearSearchList(foo, 69421)).toEqual(false);
  expect(linearSearchList(foo, 1)).toEqual(true);
  expect(linearSearchList(foo, 0)).toEqual(false);
});
