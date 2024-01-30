const a: number[] = [];

function time(fn: () => void): number {
  const perf = performance.now();
  fn();
  return performance.now() - perf;
}

function unshift(number: number) {
  for (let i = 0; i < number; ++i) {
    a.unshift(Math.random());
  }
}

function shift(number: number) {
  for (let i = 0; i < number; ++i) {
    a.shift();
  }
}

function push(number: number) {
  for (let i = 0; i < number; ++i) {
    a.push(Math.random());
  }
}

function pop(number: number) {
  for (let i = 0; i < number; ++i) {
    a.pop();
  }
}

function get(idx: number) {
  return function () {
    return a[idx];
  };
}

function push_arr(count: number) {
  return function () {
    push(count);
  };
}

function pop_arr(count: number) {
  return function () {
    pop(count);
  };
}

function unshift_arr(count: number) {
  return function () {
    unshift(count);
  };
}

function shift_arr(count: number) {
  return function () {
    shift(count);
  };
}

const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000];
console.log('Testing get');
tests.forEach(t => {
  a.length = 0;
  push(t);
  console.log(t, time(get(t - 1)));
});

console.log('push');
tests.forEach(t => {
  a.length = 0;
  push(t);

  console.log(t, time(push_arr(1000)));
});

console.log('pop');
tests.forEach(t => {
  a.length = 0;
  push(t);

  console.log(t, time(pop_arr(1000)));
});

console.log('unshift');
tests.forEach(t => {
  a.length = 0;
  push(t);

  console.log(t, time(unshift_arr(1000)));
});

console.log('shift');
tests.forEach(t => {
  a.length = 0;
  push(t);

  console.log(t, time(shift_arr(1000)));
});

/*

$ npx ts-node ./src/array-test.ts

Testing


get
10 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.02179999999998472
}
100 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.015199999999822467
}
1000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.006499999999959982
}
10000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.010000000000218279
}
100000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.014499999999770807
}
1000000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.03040000000009968
}
10000000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.12449999999989814
}




push
10 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.03319999999985157
}
100 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.018399999999928696
}
1000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.021600000000034925
}
10000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.026499999999941792
}
100000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.011600000000271393
}
1000000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.011700000000018917
}
10000000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.011300000000119326
}



pop
10 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.06899999999995998
}
100 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.035899999999855936
}
1000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.0751999999997679
}
10000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.05120000000033542
}
100000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.005099999999856664
}
1000000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.004799999999704596
}
10000000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.005099999999856664
}



unshift
10 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.20949999999993452
}
100 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.18240000000014334
}
1000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.3243000000002212
}
10000 {
  'Date.now() - start': 2,
  'performance.now() - perf': 2.2414999999996326
}
100000 {
  'Date.now() - start': 24,
  'performance.now() - perf': 24.12570000000005
}
1000000 {
  'Date.now() - start': 514,
  'performance.now() - perf': 513.5717000000004
}
10000000 {
  'Date.now() - start': 6181,
  'performance.now() - perf': 6180.7303999999995
}



shift
10 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.07800000000133878
}
100 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.036099999999350985
}
1000 {
  'Date.now() - start': 0,
  'performance.now() - perf': 0.18400000000110595
}
10000 {
  'Date.now() - start': 1,
  'performance.now() - perf': 0.832300000000032
}
100000 {
  'Date.now() - start': 20,
  'performance.now() - perf': 20.254400000001624
}
1000000 {
  'Date.now() - start': 758,
  'performance.now() - perf': 758.2343000000001
}
10000000 { 'Date.now() - start': 7965, 'performance.now() - perf': 7964.8999 }

*/
