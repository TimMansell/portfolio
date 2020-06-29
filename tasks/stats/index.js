const fs = require('fs-extra');

const getLoc = require('./loc');
const getGithubStats = require('./github');

const file = './src/components/Stats/json/stats.json';

const stats = async () => {
  const loc = await getLoc();

  try {
    const github = await getGithubStats();

    const obj = {
      ...loc,
      ...github,
    };

    fs.outputJsonSync(file, obj);
  } catch (error) {
    console.error(error);
  }
};

module.exports = stats;
