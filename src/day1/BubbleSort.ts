export const bubbleSort = (arr: number[]): void => {
  const { length } = arr;
  const lengthMinusOne = length - 1;

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < lengthMinusOne - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
};
