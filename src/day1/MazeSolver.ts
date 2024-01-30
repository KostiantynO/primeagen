const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const walk = (
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: (0 | 1)[][],
  path: Point[]
): 0 | 1 => {
  // Base Case:
  const { x, y } = curr;
  const [firstRow] = maze;
  const { length: columnLength } = maze;
  const { length: rowLength } = firstRow;

  // 1. off the map
  if (
    // prettier-ignore
    x < 0 || x >= rowLength ||
    y < 0 || y >= columnLength
  ) {
    return 0;
  }

  const cell = maze[y][x];

  // 2. its a wall
  if (cell === wall) {
    return 0;
  }

  const { x: endX, y: endY } = end;

  // 3. its the end
  if (x === endX && y === endY) {
    path.push(curr);
    return 1;
  }

  // 4. if we have seen it
  if (seen[y][x]) {
    return 0;
  }

  // 3 steps to recursion inside the recurse case:
  // pre
  seen[y][x] = 1;
  path.push(curr);

  // recurse

  for (let i = 0, len = dir.length; i < len; i += 1) {
    const [newX, newY] = dir[i];
    const newCurr = { x: x + newX, y: y + newY };
    const isSuccessfulWalk = walk(maze, wall, newCurr, end, seen, path);

    if (isSuccessfulWalk) {
      return 1;
    }
  }

  // post
  path.pop();

  return 0;
};

export const mazeSolver = (
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] => {
  const seen: (0 | 1)[][] = [];
  const path: Point[] = [];

  const { length: mazeLength } = maze;
  const [{ length: rowLength }] = maze;

  for (let i = 0; i < mazeLength; i += 1) {
    const arrays = new Array(rowLength).fill(0);
    seen.push(arrays);
  }

  walk(maze, wall, start, end, seen, path);

  return path;
};
