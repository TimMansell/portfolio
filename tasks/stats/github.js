const fetch = require('node-fetch');
require('dotenv').config();

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
              nodes {
                committedDate
              }
              pageInfo {
                endCursor
              }
            }
          }
        }
      }
    }
  }`;

const github = () =>
  new Promise((resolve, reject) => {
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .then((res) => res.text())
      .then((body) => resolve(formatAPIOutput(body)))
      .catch(() => reject('Failed to fetch github stats'));
  });

const formatAPIOutput = (body) => {
  const { data } = JSON.parse(body);
  const { pullRequests, ref } = data.repository;

  console.log('d', body);

  return {
    pullRequests: pullRequests.totalCount,
    commits: ref.target.history.totalCount,
  };
};

module.exports = github;
