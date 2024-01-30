/** [lo, hi] inclusive */
const qs = (arr: number[], lo: number, hi: number): void => {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
};

const partition = (arr: number[], lo: number, hi: number): number => {
  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; i += 1) {
    if (arr[i] <= pivot) {
      idx += 1;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  // swap pivot with the first cell, located to the right of sorted numbers, that are less then pivot
  // put pivot where the pivotIndex is

  // hold true to the one rule:
  // Everything to the left of the pivot needs to be less that or equal to
  // and everything right of it needs to be greater than it
  idx += 1;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
};

export const quickSort = (arr: number[]): void => {
  qs(arr, 0, arr.length - 1);
};
