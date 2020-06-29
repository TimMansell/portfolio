const fs = require('fs-extra');
const glob = require('glob');
const sloc = require('sloc');

const countLoc = (currentValue, file) => {
  const code = fs.readFileSync(file, 'utf8');
  const { source } = sloc(code, 'js');

  return source + currentValue;
};

const stats = () =>
  new Promise((resolve) => {
    glob('./src/**/*.?(js|scss)', {}, (er, files) => {
      const loc = files.reduce(countLoc, 0);

      resolve({ loc: loc });
    });
  });

module.exports = stats;
