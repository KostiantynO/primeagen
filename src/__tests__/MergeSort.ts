import { mergeSort } from '@code/MergeSort';

test(mergeSort.name, () => {
  const arr = [9, 3, 7, 4, 69, 420, 42];
  mergeSort(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
