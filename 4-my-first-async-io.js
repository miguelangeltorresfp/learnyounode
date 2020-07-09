'use-strict';
const fs = require('fs');

const path = process.argv[2];
const content = fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.split('\n').length - 1;
  console.log(result);
});
