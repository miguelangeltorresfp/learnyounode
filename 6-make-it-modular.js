'use-strict';
const filterFn = require('./solution_filter');

const dir = process.argv[2];
const ext = process.argv[3];

filterFn(dir, ext, (err, data) => {
  if (err) {
    return console.error('There was an error:', err);
  }
  data.forEach((file) => {
    console.log(file);
  });
});
