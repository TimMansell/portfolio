const fs = require('fs-extra');
const glob = require('glob');
const sloc = require('sloc');

const file = './src/components/Stats/json/stats.json';

const stats = () =>
  glob('./src/**/*.?(js|scss)', {}, (er, files) => {
    const countLoc = (currentValue, file) => {
      const code = fs.readFileSync(file, 'utf8');
      const { source } = sloc(code, 'js');

      return source + currentValue;
    };

    const loc = files.reduce(countLoc, 0);

    console.log('loc', loc);
    fs.outputJsonSync(file, { loc: loc });
  });

module.exports = stats;
