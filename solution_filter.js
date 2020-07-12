'use-strict';
const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, data) => {
    if (err) return callback(err);

    const result = data.filter((file) => {
      return path.extname(file) === '.' + ext;
    });

    return callback(null, result);
  });
};
