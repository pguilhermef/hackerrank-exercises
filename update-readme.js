const fs = require('fs');
const { execSync } = require('child_process');

// Read README template
const template = fs.readFileSync('README-template.md', 'utf8');

// Count consecutive commits
const count = execSync('npm run count-commits').toString().trim();

// Update README
const readme = template.replace('{{count}}', count);
fs.writeFileSync('README.md', readme);
