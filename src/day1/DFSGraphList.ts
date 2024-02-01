const walk = (
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: (0 | 1)[],
  path: number[]
): 0 | 1 => {
  if (seen[curr]) {
    return 0;
  }

  seen[curr] = 1;

  // recurse
  // pre
  path.push(curr);
  if (curr === needle) {
    return 1;
  }

  // recurse
  const list = graph[curr];
  for (let i = 0, len = list.length; i < len; i += 1) {
    const { to } = list[i];

    const isNeedleFound = walk(graph, to, needle, seen, path);

    if (isNeedleFound) {
      // path.push(to);
      return 1;
    }
    //
  }

  // post
  path.pop();

  return 0;
};

export const dfsGraphList = (
  graph: WeightedAdjacencyList,
  source: number,
  needle: number
): number[] | null => {
  const seen: (0 | 1)[] = new Array(graph.length).fill(0);

  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  if (path.length === 0) {
    return null;
  }

  return path;
};
