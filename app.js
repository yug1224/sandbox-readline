const fs = require('fs');
const readline = require('readline');
const fetch = require('node-fetch');

(async () => {
  console.log('start');

  const input = fs.createReadStream('./input.txt');

  const rl = readline.createInterface({input});

  for await (const line of rl) {
    const res = await fetch(line);
    const json = await res.json();
    console.log(res.status, json.username);
  }

  console.log('end');
})();
