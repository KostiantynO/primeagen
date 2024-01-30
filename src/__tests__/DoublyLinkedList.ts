import { DoublyLinkedList } from '@code/DoublyLinkedList';
import { testList } from './ListTest';

test(DoublyLinkedList.name, () => {
  const list = new DoublyLinkedList<number>();
  testList(list);
});
