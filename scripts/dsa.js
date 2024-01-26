const length_property = {
  properties: [
    {
      name: 'length',
      type: 'number',
      scope: 'public',
    },
  ],
};
const list_interface = {
  methods: [
    {
      name: 'prepend',
      args: 'item: T',
      return: 'void',
    },
    {
      name: 'insertAt',
      args: 'item: T, idx: number',
      return: 'void',
    },
    {
      name: 'append',
      args: 'item: T',
      return: 'void',
    },
    {
      name: 'remove',
      args: 'item: T',
      return: 'T | undefined',
    },
    {
      name: 'get',
      args: 'idx: number',
      return: 'T | undefined',
    },
    {
      name: 'removeAt',
      args: 'idx: number',
      return: 'T | undefined',
    },
  ],
  ...length_property,
};

module.exports = {
  LRU: {
    generic: '<K, V>',
    type: 'class',
    methods: [
      {
        name: 'update',
        args: 'key: K, value: V',
        return: 'void',
      },
      {
        name: 'get',
        args: 'key: K',
        return: 'V | undefined',
      },
    ],
    properties: [
      {
        name: 'length',
        type: 'number',
        scope: 'private',
      },
    ],
  },
  MinHeap: {
    type: 'class',
    methods: [
      {
        name: 'insert',
        args: 'value: number',
        return: 'void',
      },
      {
        name: 'delete',
        args: '',
        return: 'number',
      },
    ],
    properties: [
      {
        name: 'length',
        type: 'number',
        scope: 'public',
      },
    ],
  },

  MyMap: {
    generic: '<T extends (string | number), V>',
    type: 'class',
    methods: [
      {
        name: 'get',
        args: 'key: T',
        return: 'V | undefined',
      },
      {
        name: 'set',
        args: 'key: T, value: V',
        return: 'void',
      },
      {
        name: 'delete',
        args: 'key: T',
        return: 'V | undefined',
      },
      {
        name: 'size',
        return: 'number',
      },
    ],
  },

  RingBuffer: {
    generic: '<T>',
    type: 'class',
    methods: [
      {
        name: 'push',
        args: 'item: T',
        return: 'void',
      },
      {
        name: 'get',
        args: 'idx: number',
        return: 'T | undefined',
      },
      {
        name: 'pop',
        return: 'T | undefined',
      },
    ],
    properties: [
      {
        name: 'length',
        type: 'number',
        scope: 'public',
      },
    ],
  },

  ArrayList: {
    type: 'class',
    generic: '<T>',
    ...list_interface,
  },
  SinglyLinkedList: {
    generic: '<T>',
    type: 'class',
    ...list_interface,
  },
  DoublyLinkedList: {
    generic: '<T>',
    type: 'class',
    ...list_interface,
  },
  Queue: {
    generic: '<T>',
    type: 'class',
    ...length_property,
    methods: [
      {
        name: 'enqueue',
        args: 'item: T',
        return: 'void',
      },
      {
        name: 'deque',
        args: '',
        return: 'T | undefined',
      },
      {
        name: 'peek',
        args: '',
        return: 'T | undefined',
      },
    ],
  },
  Stack: {
    generic: '<T>',
    type: 'class',
    ...length_property,
    methods: [
      {
        name: 'push',
        args: 'item: T',
        return: 'void',
      },
      {
        name: 'pop',
        args: '',
        return: 'T | undefined',
      },
      {
        name: 'peek',
        args: '',
        return: 'T | undefined',
      },
    ],
  },

  Trie: {
    type: 'class',
    methods: [
      {
        name: 'insert',
        args: 'item: string',
        return: 'void',
      },
      {
        name: 'delete',
        args: 'item: string',
        return: 'void',
      },
      {
        name: 'find',
        args: 'partial: string',
        return: 'string[]',
      },
    ],
  },

  BubbleSort: {
    type: 'fn',
    fn: 'bubbleSort',
    args: 'arr: number[]',
    return: 'void',
  },

  InsertionSort: {
    type: 'fn',
    fn: 'insertionSort',
    args: 'arr: number[]',
    return: 'void',
  },

  MergeSort: {
    type: 'fn',
    fn: 'mergeSort',
    args: 'arr: number[]',
    return: 'void',
  },

  QuickSort: {
    type: 'fn',
    fn: 'quickSort',
    args: 'arr: number[]',
    return: 'void',
  },

  DijkstraList: {
    type: 'fn',
    fn: 'dijkstraList',
    args: 'source: number, sink: number, arr: WeightedAdjacencyList',
    return: 'number[]',
  },

  PrimsList: {
    type: 'fn',
    fn: 'prims',
    args: 'list: WeightedAdjacencyList',
    return: 'WeightedAdjacencyList | null',
  },

  BinarySearchList: {
    type: 'fn',
    fn: 'bsList',
    args: 'haystack: number[], needle: number',
    return: 'boolean',
  },

  LinearSearchList: {
    type: 'fn',
    fn: 'linearSearchList',
    args: 'haystack: number[], needle: number',
    return: 'boolean',
  },

  TwoCrystalBalls: {
    type: 'fn',
    fn: 'twoCrystalBalls',
    args: 'breaks: boolean[]',
    return: 'number',
  },

  MazeSolver: {
    type: 'fn',
    fn: 'mazeSolver',
    args: 'maze: string[], wall: string, start: Point, end: Point',
    return: 'Point[]',
  },

  BTPreOrder: {
    type: 'fn',
    fn: 'btPreOrder',
    args: 'head: BinaryNode<number>',
    return: 'number[]',
  },

  BTInOrder: {
    type: 'fn',
    fn: 'btInOrder',
    args: 'head: BinaryNode<number>',
    return: 'number[]',
  },

  BTPostOrder: {
    type: 'fn',
    fn: 'btPostOrder',
    args: 'head: BinaryNode<number>',
    return: 'number[]',
  },

  BTBFS: {
    type: 'fn',
    fn: 'btbfs',
    args: 'head: BinaryNode<number>, needle: number',
    return: 'boolean',
  },

  CompareBinaryTrees: {
    type: 'fn',
    fn: 'compareBinaryTrees',
    args: 'a: BinaryNode<number> | null, b: BinaryNode<number> | null',
    return: 'boolean',
  },

  DFSOnBST: {
    type: 'fn',
    fn: 'dfsOnBST',
    args: 'head: BinaryNode<number>, needle: number',
    return: 'boolean',
  },

  DFSGraphList: {
    type: 'fn',
    fn: 'dfsGraphList',
    args: 'graph: WeightedAdjacencyList, source: number, needle: number',
    return: 'number[] | null',
  },

  BFSGraphList: {
    type: 'fn',
    fn: 'bfsGraphList',
    args: 'graph: WeightedAdjacencyList, source: number, needle: number',
    return: 'number[] | null',
  },

  BFSGraphMatrix: {
    type: 'fn',
    fn: 'bfsGraphMatrix',
    args: 'graph: WeightedAdjacencyMatrix, source: number, needle: number',
    return: 'number[] | null',
  },
};
