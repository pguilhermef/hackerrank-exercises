const fs = require('fs');
const { execSync } = require('child_process');

const commits = execSync('git log --format="%at"').toString().split('\n');

let count = 0;
let prevDate = null;

for (const commit of commits) {
  if (!commit) continue;

  const date = new Date(Number(commit) * 1000).toISOString().substring(0, 10);

  if (prevDate !== date) {
    count++;
  } else {
    break;
  }

  prevDate = date;
}

// Read README template
const template = fs.readFileSync('updateReadmeScript/README-template.md', 'utf8');

// Update README
const readme = template.replaceAll('{count}', count);
fs.writeFileSync('README.md', readme);

console.log(`O README foi atualizado com sucesso com a contagem de dias: ${count}`);
