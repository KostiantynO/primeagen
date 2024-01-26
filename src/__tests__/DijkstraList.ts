import { dijkstraList } from '@code/DijkstraList';
import { list1 } from './graph';

test(dijkstraList.name, () => {
  /// waht?
  // what..
  // what...
  expect(dijkstraList(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
});
