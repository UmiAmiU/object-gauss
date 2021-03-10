function randomGauss() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return (Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2) | 0;
}

const range = [];
for (let i = 0; i < 100; i++) {
  range[i] = randomGauss();
}

const res = range.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log("Range: ", range);
for (const [key, value] of Object.entries(res)) {
  console.log(`Number: ${key} - ${value} entry(ies)`);
}
