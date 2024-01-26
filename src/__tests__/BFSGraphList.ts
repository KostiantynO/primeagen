import { bfsGraphList } from '@code/BFSGraphList';
import { list2 } from './graph';

test(bfsGraphList.name, () => {
  expect(bfsGraphList(list2, 0, 6)).toEqual([0, 1, 4, 5, 6]);

  expect(bfsGraphList(list2, 6, 0)).toEqual(null);
});
