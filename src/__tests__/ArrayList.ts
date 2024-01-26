import { ArrayList } from '@code/ArrayList';
import { testList } from './ListTest';

test(`${ArrayList.name} - ${testList.name}`, () => {
  const list = new ArrayList<number>(3);
  testList(list);
});
