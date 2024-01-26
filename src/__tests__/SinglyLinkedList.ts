import { SinglyLinkedList } from '@code/SinglyLinkedList';
import { testList } from './ListTest';

test(`${SinglyLinkedList.name} - ${testList.name}`, () => {
  const list = new SinglyLinkedList<number>();
  testList(list);
});
