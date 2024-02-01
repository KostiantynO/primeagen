const hasUnvisited = (seen: boolean[], dists: number[]): boolean =>
  seen.some((s, i) => !s && dists[i] < Infinity);

const getLowestUnvisited = (seen: boolean[], dists: number[]): number => {
  let idx = -1;
  let lowestDistance = Infinity;

  for (let i = 0, len = seen.length; i < len; i += 1) {
    if (seen[i]) {
      continue;
    }

    const dist = dists[i];

    if (lowestDistance > dist) {
      lowestDistance = dist;
      idx = i;
    }
  }

  return idx;
};

export const dijkstraList = (
  source: number,
  sink: number,
  arr: WeightedAdjacencyList
): number[] => {
  const { length } = arr;

  const seen: boolean[] = new Array(length).fill(false);
  const prev: number[] = new Array(length).fill(-1);
  const dists = new Array(length).fill(Infinity);
  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    const curr = getLowestUnvisited(seen, dists);
    seen[curr] = true;

    const adjs = arr[curr];

    for (let i = 0, len = adjs.length; i < len; i += 1) {
      const { to, weight } = adjs[i];
      if (seen[to]) {
        continue;
      }

      const dist = dists[curr] + weight;
      if (dist < dists[to]) {
        dists[to] = dist;
        prev[to] = curr;
      }
    }
  }

  const out: number[] = [];
  let curr = sink;

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  out.push(source);
  return out.reverse();
};
