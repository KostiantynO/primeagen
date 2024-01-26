import { DoublyLinkedList } from '@code/DoublyLinkedList';
import { test_list } from './ListTest';

test(DoublyLinkedList.name, () => {
  const list = new DoublyLinkedList<number>();
  test_list(list);
});
