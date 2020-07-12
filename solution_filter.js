'use-strict';
const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, data) => {
    if (err) return callback(err);

    const result = data.filter((file) => path.extname(file) === '.' + ext);

    callback(null, result);
  });
};
