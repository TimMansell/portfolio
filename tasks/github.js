const fetch = require('node-fetch');
const fs = require('fs-extra');
require('dotenv').config();

const file = './src/components/Stats/json/github.json';

const ACCESS_TOKEN = process.env.GITHUB_TOKEN;
const query = `
  query {
    repository(owner:"timmansell", name:"portfolio") {
     pullRequests {
       totalCount
     }
     ref(qualifiedName: "master") {
        target {
          ... on Commit {
            history {
              totalCount
            }
          }
        }
      }
    }
  }`;

const github = () =>
  fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  })
    .then((res) => res.text())
    .then((body) => formatAPIOutput(body))
    .catch((error) => console.error(error));

const formatAPIOutput = (body) => {
  const { data } = JSON.parse(body);
  const { pullRequests, ref } = data.repository;

  const obj = {
    pullRequests: pullRequests.totalCount,
    commits: ref.target.history.totalCount,
  };

  fs.outputJsonSync(file, obj);
};

module.exports = github;
