export const bfsGraphMatrix = (
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number
): number[] | null => {
  const { length } = graph;
  const seen = new Array(length).fill(false);
  const prev = new Array(length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  do {
    const curr = q.shift();
    if (curr === undefined) {
      throw new Error('shifting empty array');
    }

    if (curr === needle) {
      break;
    }

    const adjs = graph[curr];
    for (let i = 0, len = adjs.length; i < len && i < length; i += 1) {
      if (adjs[i] === 0 || seen[i]) {
        continue;
      }

      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }

    seen[curr] = true;
  } while (q.length);

  if (prev[needle] === -1) {
    return null;
  }

  // build it backwards

  let curr = needle;
  const out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse());
};
