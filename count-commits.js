const { execSync } = require('child_process');

const commits = execSync('git log --format="%at"').toString().split('\n');

let count = 0;
let prevDate = null;

for (const commit of commits) {
  if (!commit) continue;

  const date = new Date(Number(commit) * 1000).toISOString().substr(0, 10);

  if (prevDate === date) {
    count++;
  } else {
    break;
  }

  prevDate = date;
}

console.log(count);
